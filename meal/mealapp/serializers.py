from rest_framework.serializers import  ModelSerializer
from .models import *

class CustomUserSerializer(ModelSerializer):
 
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'password', 'first_name', 'last_name', 'is_customer', 'is_caterer')

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class CatererSerializer(ModelSerializer):
    class Meta:
        model = Caterer
        fields = '__all__'