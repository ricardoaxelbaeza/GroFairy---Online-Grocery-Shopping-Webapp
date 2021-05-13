from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'first_name', 'last_name', 'date_of_birth',
                  'email', 'password', 'address', 'phone_number']


class GroceryStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grocery_Store
        fields = ['store_id', 'store_name', 'store_address', 'store_image']


class GroceryStoreStockSerializer(serializers.ModelSerializer):
    store_id = serializers.IntegerField(read_only=True)
    product_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Grocery_Store_Stock
        fields = ['store_id', 'product_id', 'stock', 'unit_price']


class GroceryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grocery_Product
        fields = ['product_id', 'product_name', 'product_image']

class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopping_Cart
        fields = ['cart_id', 'item', 'price', 'quantity']
    
    def update(self, instance, validated_data):
        instance.cart_id = validated_data.get('cart_id', instance.cart_id)
        instance.item = validated_data.get('item', instance.item)
        instance.price = validated_data.get('price', instance.price)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        return instance