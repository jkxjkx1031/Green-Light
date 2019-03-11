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


class Company(models.Model):
    name = models.CharField(max_length=100, default="")
    price = models.IntegerField(default=0)
    code = models.IntegerField(default=0)
    listing_date = models.DateTimeField()
    abbrev = models.CharField(max_length=100, default="")
    address4register = models.CharField(max_length=100, default="")
    address4contact = models.CharField(max_length=100, default="")
    legal_person = models.CharField(max_length=100, default="")
    tel = models.CharField(max_length=100, default="")
    website = models.CharField(max_length=100, default="")
    is_validated = models.BooleanField(default=False)
    identifier = models.CharField(max_length=20, default="")
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
    