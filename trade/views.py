from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse

from .forms import LoginForm
from .models import Product, CarbonCoinCcy
from .wechat_crypt.WXBizDataCrypt import WXBizDataCrypt

import json, operator


def index(request):
    if request.user.is_authenticated:
        ccy_list = get_list_or_404(CarbonCoinCcy)
        ccy_list = sorted(ccy_list, key=operator.attrgetter('date'), reverse=True)
        if len(ccy_list) > 15:
            ccy_list = ccy_list[:15]
        inc3 = round((ccy_list[0].close - ccy_list[3].close) / ccy_list[3].close * 100)
        inc7 = round((ccy_list[0].close - ccy_list[7].close) / ccy_list[7].close * 100)
        ccy_list.reverse()
        context = {
            'account': request.user.account,
            'dates': [entry.date.strftime('%b %d') for entry in ccy_list],
            'prices': [entry.close for entry in ccy_list],
            'last_updated': ccy_list[-1].date.strftime('%b %d, %Y'),
            'inc3': inc3,
            'inc7': inc7,
            'price_today': '$%.6f' % ccy_list[-1].close
        }
        return render(request, 'trade/index.html', context)
    else:
        return render(request, 'trade/introduction.html')


def login(request):
    if request.method == 'GET':
        form = LoginForm()
        return render(request, 'trade/login.html', {'form': form})
    else:
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            passwd = request.POST.get('passwd')
            user = auth.authenticate(username=username, password=passwd)
            if user is not None and user.is_active:
                auth.login(request, user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return render(request, 'trade/login.html', {'form': form, 'password_is_wrong': True})
        else:
            return render(request, 'trade/login.html', {'form': form})


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('index'))


def market(request):
    products = get_list_or_404(Product)
    context = {
        'products': products
    }
    return render(request, 'trade/market.html', context)


def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    context = {
        'product': product
    }
    return render(request, 'trade/product_detail.html', context)


@login_required(login_url='/login/')
def energy_display(request):
    context = {
        'account': request.user.account,
        'energy_account': request.user.account.energyaccount
    }
    return render(request, 'trade/energy.html', context)


@csrf_exempt
def wechat_crypt_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
    else:
        data = request.GET
    app_id = data.get('appId')
    session_key = data.get('sessionKey')
    encrypted_data = data.get('encryptedData')
    iv = data.get('iv')
    if request.method == 'POST':
        pc = WXBizDataCrypt(app_id, session_key)
        decrypted_data = pc.decrypt(encrypted_data, iv)
        steps = decrypted_data['stepInfoList'][-1]['step']
        ts = decrypted_data['watermark']['timestamp']
        return JsonResponse({'steps': steps, 'timestamp': ts})
    else:
        return HttpResponse('<h1>GET</h1></br>appId: %s</br>sessionKey: %s</br>encryptedData: %s</br>iv: %s' % (app_id, session_key, encrypted_data, iv))


@csrf_exempt
def wechat_upload_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        steps = data['steps']
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request, user)
            ea = user.account.energyaccount
            ea.energy = steps
            ea.save()
            auth.logout(request)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})
    else:
        return HttpResponse('<h1>GET</h1>')
