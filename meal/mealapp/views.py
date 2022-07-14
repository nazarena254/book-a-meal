from urllib import request
from django.shortcuts import render
from rest_framework.response import Response
from .email import send_welcome_email
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny, IsAdminUser
from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAdminUser
from .permissions import IsAdminOrReadOnly
from django.core.mail import send_mail


# Create your views here.
class ProfileView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user.email),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                        context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.pk,
            'email': user.email,
            'is_superuser': user.is_superuser,
        })


class UserView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class MenuView(APIView):

    permission_classes = [IsAdminOrReadOnly]

    def get(self, request, format=None):
        queryset = Menu.objects.all()
        serializer = MenuSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

# class OrderView(generics.ListCreateAPIView):

#     serializer_class = OrderSerializer

#     queryset = Menu.objects.all()    
#     def get(self, request, format=None):
#         queryset = Menu.objects.all()
#         serializer = MenuSerializer(queryset, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = MenuSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

class CustomerView(APIView):

    def get(self, request, format=None):
        queryset = Customer.objects.all()
        serializer = CustomerSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class CatererView(APIView):

    def get(self, request, format=None):
        queryset = Caterer.objects.all()
        serializer = CatererSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CatererSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class OrderView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        queryset = Order.objects.all()
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)

    queryset = Order.objects.all()
    def post(self, request, format=None):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class OrderDetailView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        order = Order.get_menu_count_by_menu_id(pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

