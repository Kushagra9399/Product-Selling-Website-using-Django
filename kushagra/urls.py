"""
URL configuration for kushagra project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from kushagra import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homePage),
    path('about-us/',views.aboutUs),
    path('login-page/',views.log_in),
    path('sign-in/',views.sign_in),
    path("product/",views.products),
    path('product/order/',views.order),
    path('profile/',views.profile),
    path('authenticate/',views.valid_user),
    path('log-out/',views.logout_user,name='logout_user')
]
