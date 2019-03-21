from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.utils import timezone

from .models import Company, Product, Purchase, EnergyHistory, CarbonCoinCcy
from .wechat_crypt.WXBizDataCrypt import WXBizDataCrypt

import json


def index(request):
    ccy_list = get_list_or_404(CarbonCoinCcy)
    if len(ccy_list) > 15:
        ccy_list = ccy_list[:15]
    inc3 = round((ccy_list[0].close - ccy_list[3].close) / ccy_list[3].close * 100)
    inc7 = round((ccy_list[0].close - ccy_list[7].close) / ccy_list[7].close * 100)
    ccy_list.reverse()
    context = {
        'dates': [entry.date.strftime('%b %d') for entry in ccy_list],
        'prices': [entry.close for entry in ccy_list],
        'last_updated': ccy_list[-1].date.strftime('%b %d, %Y'),
        'inc3': inc3,
        'inc7': inc7,
        'price_today': '$%.6f' % ccy_list[-1].close
    }
    return render(request, 'trade/index.html', context)


def login(request):
    if request.method == 'GET':
        return render(request, 'trade/login.html')
    else:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request, user)
            return HttpResponseRedirect(reverse('index'))
        else:
            return render(request, 'trade/login.html', {'failure': True})


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('index'))


def market(request):
    companies = get_list_or_404(Company)
    context = {
        'companies': companies
    }
    return render(request, 'trade/market.html', context)


def company_profile(request, company_id):
    company = get_object_or_404(Company, pk=company_id)
    context = {
        'company': company
    }
    return render(request, 'trade/company.html', context)


def store(request):
    products = get_list_or_404(Product)
    context = {
        'products': products
    }
    return render(request, 'trade/store.html', context)


def product_profile(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    context = {
        'product': product
    }
    return render(request, 'trade/product.html', context)


@login_required(login_url='/login/')
def profile(request):
    context = {
        'account': request.user.account,
        'energy_account': request.user.account.energyaccount,
        'energy_history': EnergyHistory.objects.filter(ea=request.user.account.energyaccount)[:7]
    }
    return render(request, 'trade/profile.html', context)


@csrf_exempt
def purchase(request):
    if request.method == "GET":
        return render(request, 'trade/login.html')
    else:
        current_user = request.user
        amount = request.POST.get('amount')
        int_amount = int(amount)
        price = request.POST.get('price')
        int_price = int(price)
        cost = int_amount * int_price
        if current_user.account.asset > cost:
            current_user.account.asset = current_user.account.asset - cost
            current_user.account.save()
            company_id = request.POST.get('company')
            product_id = request.POST.get('product')
            if product_id != None:
                record = Purchase(user=current_user, amount=amount, price=price, time=timezone.now(), product=get_object_or_404(Product, pk=product_id))
            else:
                record = Purchase(user=current_user, amount=amount, price=price, time=timezone.now(), company=get_object_or_404(Company, pk=company_id))
            record.save()
            return HttpResponseRedirect(reverse('records'))
        else:
            return render(request, 'trade/index.html')


def records(request):
    context = {
        'records': Purchase.objects.filter(user=request.user)
    }            
    return render(request, 'trade/records.html', context)


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
            ea.last_uploaded = timezone.now()
            ea.save()
            auth.logout(request)
            return JsonResponse({'success': True, 'uploadTime': ea.last_uploaded.strftime('%H:%M:%S')})
        else:
            return JsonResponse({'success': False})
    else:
        return HttpResponse('<h1>GET</h1>')
