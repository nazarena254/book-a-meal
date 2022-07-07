from rest_framework.serializers import  ModelSerializer
from rest_framework import serializers
from .models import *

class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'is_superuser')
        extra_kwargs = {'password': {'write_only': True}, 'username': {'required': True}, 'email': {'required': True}, 'password': {'required': True}, 'is_superuser': {'required': True}}

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
        

class CatererSerializer(ModelSerializer):
    class Meta:
        model = Caterer
        fields = '__all__'

class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class MenuSerializer(ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'