from rest_framework import serializers 
from .models import *
  
class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = User
        fields = ['user_id', 'first_name', 'last_name', 'date_of_birth', 'email', 'password', 'address', 'phone_number'] 

class GroceryStoreSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Grocery_Store
        fields = ['store_id', 'store_name', 'store_address', 'store_image']

class GroceryStoreStockSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Grocery_Store_Stock
        fields = ['store_id', 'product_id', 'stock', 'unit_price', 'product_image'] 

class GroceryProductSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Grocery_Product
        fields = ['product_id', 'product_name'] 