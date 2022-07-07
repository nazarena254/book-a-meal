from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField

# Create your models here
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

class Caterer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

class Menu(models.Model):
    image = CloudinaryField('image', default='')
    name = models.CharField(max_length=300)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    menu = models.ManyToManyField(Menu, related_name='orders')
    date = models.DateTimeField(auto_now_add=True)
    
    
    

