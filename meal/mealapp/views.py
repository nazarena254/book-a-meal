from django.shortcuts import render
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework.views import APIView

# Create your views here.

class CustomerView(APIView):
    
    def get(self, request, format=None):

        customers = CustomUser.objects.all()

        serializerdata = CustomUserSerializer(customers, many=True)

        return Response(serializerdata.data)

