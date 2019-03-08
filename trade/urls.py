from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('market/', views.market, name='market'),
    path('market/<int:company_id>/', views.company_profile, name='company'),
    path('profile/', views.profile, name='profile'),
    path('pruchase/', views.purchase, name='purchase'),
    path('wxcrypt/', views.wechat_crypt_view, name='wxcrypt'),
    path('wxupload/', views.wechat_upload_view, name='wxupload'),
]