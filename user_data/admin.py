from django.contrib import admin
from user_data.models import Users

# Register your models here.
class Users_Data(admin.ModelAdmin):
    list_display=('username','mobile','email','password')

admin.site.register(Users,Users_Data)