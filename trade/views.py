from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.urls import reverse

from .forms import LoginForm
from .models import Account, Product


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
