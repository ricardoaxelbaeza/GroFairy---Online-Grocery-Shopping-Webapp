from django.shortcuts import render
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


# When a home request is received, displays home.html
def home(request):
    return render(request, 'page/home.html')

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
    return render(request, 'page/dbdump.html', {'users': all_users, 'stores': all_stores, 'drivers': all_drivers, 'grocery_products': all_grocery_products,
     'grocery_tags': all_grocery_tags, 'orders': all_orders, 'o_stores': order_stores, 'o_items': order_items, 'gs_stock': grocery_store_stock,
      'user_stores': user_pref_stores, 'user_tags': user_pref_tags})
