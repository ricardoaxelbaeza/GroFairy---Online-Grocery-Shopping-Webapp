from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from .models import User
from .models import Grocery_Store
from .models import Delivery_Driver
from .models import Grocery_Product
from .models import Grocery_Tag
from .models import Order
from .models import Order_Store
from .models import Order_Item
from .models import Grocery_Store_Stock
from .models import User_Preferred_Store
from .models import User_Preferred_Tag
import random


# When a home request is received, displays home.html
def home(request):
    return render(request, 'home.html')

# When a dbdump request is received, displays dbdump.html


def dbdump(request):
    # Declaration of all db models from models.py. Must also import a model above for it to be used here.
    all_users = User.objects.all
    all_stores = Grocery_Store.objects.all
    all_drivers = Delivery_Driver.objects.all
    all_grocery_products = Grocery_Product.objects.all
    all_grocery_tags = Grocery_Tag.objects.all
    all_orders = Order.objects.all
    order_stores = Order_Store.objects.all
    order_items = Order_Item.objects.all
    grocery_store_stock = Grocery_Store_Stock.objects.all
    user_pref_stores = User_Preferred_Store.objects.all
    user_pref_tags = User_Preferred_Tag.objects.all

    # Returns the dbdump.html with all variables to be used in the html set with strings.
    # To add more, just put a comma after the variables and follow suit.
    return render(request, 'dbdump.html', {'users': all_users, 'stores': all_stores, 'drivers': all_drivers, 'grocery_products': all_grocery_products,
                                           'grocery_tags': all_grocery_tags, 'orders': all_orders, 'o_stores': order_stores, 'o_items': order_items, 'gs_stock': grocery_store_stock,
                                           'user_stores': user_pref_stores, 'user_tags': user_pref_tags})


def grocerystores(request):
    all_stores = Grocery_Store.objects.all

    return render(request, 'grocerystores.html', {'stores': all_stores})


class UserView(APIView):

    serializer_class = UserSerializer

    def get(self, request):
        detail = [{'user_id': detail.user_id, 'first_name': detail.first_name, 'last_name': detail.last_name, 'date_of_birth': detail.date_of_birth,
                   'email': detail.email, 'password': detail.password, 'address': detail.address, 'phone_number': detail.phone_number} for detail in User.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class GroceryStoreView(APIView):

    serializer_class = GroceryStoreSerializer

    def get(self, request):
        detail = [{'store_id': detail.store_id, 'store_name': detail.store_name, 'store_address': detail.store_address,
                   'store_image': detail.store_image, } for detail in Grocery_Store.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = GroceryStoreSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class GroceryStoreStockView(APIView):

    serializer_class = GroceryStoreStockSerializer

    def get(self, request):
        tempID = random.randint(1, 10)
        detail = [{'store_id': detail.store_id, 'product_id': detail.product_id, 'stock': detail.stock,
                   'unit_price': detail.unit_price, 'product_image' : detail.product_image, 'product_name' : ""} for detail in Grocery_Store_Stock.objects.filter(pk=tempID)]

        # for i in range(len(detail)):
        #    detail[i] = Grocery_Product.objects.get(pk=detail[i].get("product_id"))
        return Response(detail)

    def post(self, request):
        serializer = GroceryStoreStockSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
