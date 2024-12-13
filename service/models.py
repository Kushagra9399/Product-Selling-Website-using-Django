from django.db import models

# Create your models here.
class Service(models.Model):
    product_image = models.CharField(max_length=50)
    product_title = models.CharField(max_length=50)
    product_price = models.CharField(max_length=10)
    product_des = models.TextField()
