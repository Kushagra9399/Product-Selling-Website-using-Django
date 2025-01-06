from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class Users(AbstractUser):
    username = models.CharField(max_length=50)
    mobile = models.CharField(max_length=12,unique=True)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    last_login = models.DateTimeField(null=True, blank=True)  # Add last_login field
    is_active = models.BooleanField(default=True)  # Add is_active field
    date_joined = models.DateTimeField(default=timezone.now)
    is_on = models.BooleanField(default=False)
    USERNAME_FIELD = 'mobile'
    REQUIRED_FIELDS = ['username','password']
    def set_password(self, raw_password):
        """Hashes the password before saving."""
        self.password = make_password(raw_password)
        
    def check_password(self, raw_password):
        """Checks the raw password against the stored hash."""
        return check_password(raw_password, self.password)
