from django.db import models
from django.contrib.auth.models import User
from .settings import ENERGY_LEVEL_INCREMENT

class Account(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    asset = models.IntegerField(default=0)
    credit = models.IntegerField(default=100)
    is_individual = models.BooleanField(default=True)
    is_authenticated = models.BooleanField(default=False)
    img = models.ImageField(upload_to='trade/')

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    is_validated = models.BooleanField(default=False)
    img = models.ImageField(upload_to='trade/')

class EnergyAccount(models.Model):
    account = models.OneToOneField(Account, models.CASCADE)
    energy = models.IntegerField(default=0)
    last_refreshed = models.DateTimeField()
    last_uploaded = models.DateTimeField()
    reward = models.IntegerField(default=0)
    def energy_level(self):
        return self.energy // ENERGY_LEVEL_INCREMENT
    def next_level(self):
        return (self.energy_level() + 1) * ENERGY_LEVEL_INCREMENT
    def progress(self):
        return self.energy * 100 // self.next_level()

class CarbonCoinCcy(models.Model):
    date = models.DateField(unique=True)
    close = models.FloatField()
    