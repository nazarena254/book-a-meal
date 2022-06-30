from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/customers/', views.CustomerView.as_view()),
]
