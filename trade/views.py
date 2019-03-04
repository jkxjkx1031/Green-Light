from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse

from .forms import LoginForm
from .models import Product
from .wechat_crypt.WXBizDataCrypt import WXBizDataCrypt

import json


def index(request):
    if request.user.is_authenticated:
        context = {
            'account': request.user.account
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
