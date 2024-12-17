from django.contrib import admin
from service.models import Service

class Product(admin.ModelAdmin):
    list_display=('product_image','product_title','product_price','product_des')
# Register your models here.

admin.site.register(Service,Product)
