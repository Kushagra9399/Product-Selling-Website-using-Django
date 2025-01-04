from django.http import HttpResponse
from django.shortcuts import render
from service.models import Service
from user_data.models import Users
from django.contrib.auth import authenticate, login, logout

def homePage(request):
    return render(request,"index.html")

def aboutUs(request):
    return render(request,'aboutus.html')

def log_in(request):
    data = {}
    try:
        if request.method=="POST":
            name = request.POST.get('name')
            mobile = request.POST.get('mob')
            email = request.POST.get('email')
            password = request.POST.get('password')
            user = Users(username=name,mobile=mobile,email=email)
            user.set_password(password)
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

def valid_user(request):
    if request.method == "POST":
        name = request.POST.get('name')
        mobile = request.POST.get('phone')
        password = request.POST.get('password')
        data = {'name':name,'mob':mobile,'password':password}
        try:
            # Query your custom model for the user based on name and mobile
            user = Users.objects.get(username=name, mobile=mobile)
            
            # Verify the password. You might want to hash the password and compare
            if user.check_password(password):  # Assuming password is hashed in your custom model
                login(request, user)  # Log in the user
                user.is_on = True
                user.save()
                return render(request, 'index.html')
            else:
                data['error']="Invalid Credentials"
                return render(request, 'login.html', data)
        except Users.DoesNotExist:
            # Handle case where user is not found
            data['error']='No user with this mobile number'
            return render(request, 'login.html', data)

def logout_user(request):
    logout(request)
    return render(request,'index.html')