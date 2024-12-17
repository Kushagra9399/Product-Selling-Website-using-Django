from django.http import HttpResponse
from django.shortcuts import render
from service.models import Service
from user_data.models import Users

def homePage(request):
    data = {}
    if request.method=="POST":
        name = request.POST.get('name')
        mobile = request.POST.get('phone')
        password = request.POST.get('password')
        all_user = Users.objects.all()
        found = False
        for i in all_user:
            if i.mobile==mobile:
                found = True
                if i.name!=name or i.password!=password:
                    data = {'name':name,'mob':mobile,'password':password,'error':"Invalid Credentials!!!"}
                    return render(request,"login.html",data)
        if not found:
            data = {'name':name,'mob':mobile,'password':password,'error':"Mobile Number not registered!!!"}
            return render(request,"login.html",data)
        else:               
            data = {'name':name,'mob':mobile,'password':password}
    return render(request,"index.html")

def aboutUs(request):
    return render(request,'aboutus.html')

def login(request):
    data = {}
    try:
        if request.method=="POST":
            name = request.POST.get('name')
            mobile = request.POST.get('mob')
            email = request.POST.get('email')
            password = request.POST.get('password')
            user = Users(username=name,mobile=mobile,email=email,password=password)
            user.save()
            data = {'name':name,'mob':mobile,'password':password}
    except:
        pass
    return render(request,'login.html',data)

def sign_in(request):
    return render(request,'signin.html')

def products(request):
    product_data = Service.objects.all()
    data = {
        'product_data':product_data
    }
    return render(request,'product.html',data)

def order(request):
    return render(request,'order.html')

def profile(request):
    return render(request,'profile.html')
