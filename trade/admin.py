from django.contrib import admin
from . import models

admin.site.register(models.Account)
admin.site.register(models.Product)
admin.site.register(models.EnergyAccount)
admin.site.register(models.CarbonCoinCcy)
