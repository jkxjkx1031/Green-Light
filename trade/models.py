from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    asset = models.IntegerField(default=0)
    credit = models.IntegerField(default=100)
    is_individual = models.BooleanField(default=True)
    is_authenticated = models.BooleanField(default=False)

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    is_validated = models.BooleanField(default=False)
    img = models.ImageField(upload_to='trade/')
    