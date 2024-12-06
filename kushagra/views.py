from django.http import HttpResponse
from django.shortcuts import render

def homePage(request):
    # data = {
    #     'title':'First Page1',
    #     'msg':'Kushagra Prajapat is here!',
    #     'lst':["Kush","Aij","hsjbxs"],
    #     'dict':[
    #         {"Name":"Kushagra","Class":"23"},
    #         {"Name":"Kp","Class":"34"}            
    #     ],
    #     'num':[1,2,3,4,5,6,7,8,9,10]
    # }
    return render(request,"index.html")

def aboutUs(request):
    return render(request,'aboutus.html')

def login(request):
    try:
        if request.method=="POST":
            name = request.POST.get("name")
            mob = request.POST.get("phone")
            pas = request.POST.get("password")
    except:
        pass
    return render(request,'login.html')

def sign_in(request):
    return render(request,'signin.html')

def products(request):
    return render(request,'product.html')

def order(request):
    return render(request,'order.html')