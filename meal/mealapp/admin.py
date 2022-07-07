from django.contrib import admin

from .models import *


admin.site.register(Customer)
admin.site.register(Caterer)
admin.site.register(Menu)
admin.site.register(Order)