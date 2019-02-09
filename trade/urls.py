from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('market/', views.market, name='market'),
    path('market/<int:product_id>/', views.product_detail, name='product_detail'),
]