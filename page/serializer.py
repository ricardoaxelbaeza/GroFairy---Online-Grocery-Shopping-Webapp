from rest_framework import serializers 
from .models import *
  
class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = User
        fields = ['user_id', 'first_name', 'last_name', 'date_of_birth', 'email', 'password', 'address', 'phone_number'] 

class GroceryStoreSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Grocery_Store
        fields = ['store_id', 'store_name', 'store_address'] 
