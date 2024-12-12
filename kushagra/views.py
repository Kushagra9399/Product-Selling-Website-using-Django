from django.http import HttpResponse
from django.shortcuts import render

def homePage(request):
    return render(request,"index.html")

def aboutUs(request):
    return render(request,'aboutus.html')

def login(request):
    data = {}
    try:
        if request.method=="POST":
            name = request.POST.get("name")
            mob = request.POST.get("mob")
            pas = request.POST.get("password")
            data = {'name':name,'mob':mob,'password':pas}
    except:
        pass
    return render(request,'login.html',data)

def sign_in(request):
    return render(request,'signin.html')

def products(request):
    return render(request,'product.html')

def order(request):
    return render(request,'order.html')

def profile(request):
    
    return render(request,'profile.html')