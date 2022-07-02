from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField("email address", unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["username"]
    is_customer = models.BooleanField(default=False)
    is_caterer = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class Customer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)

class Caterer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)

class Menu(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Option(models.Model):
    name = models.CharField(max_length=1000)
    price = models.FloatField()
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)

