from django.db import models

class Account(models.Model):
    username = models.CharField(max_length=20)
    passwd = models.CharField(max_length=100)
    asset = models.IntegerField(default=0)
    credit = models.IntegerField(default=100)
    isIndividual = models.BooleanField(default=True)
    isValidated = models.BooleanField(default=False)

class Product(models.Model):
    name = models.CharField(max_length=100)
    Price = models.IntegerField()
    isValidated = models.BooleanField(default=False)