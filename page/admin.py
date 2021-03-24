from django.contrib import admin
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

# Creation of the admin pages in localhost:8000/admin/. Completely unnecessary but can add/remove/view data from there if needed.
admin.site.register(User)
admin.site.register(Grocery_Store)
admin.site.register(Delivery_Driver)
admin.site.register(Grocery_Product)
admin.site.register(Grocery_Tag)
admin.site.register(Order)
admin.site.register(Order_Store)
admin.site.register(Order_Item)
admin.site.register(Grocery_Store_Stock)
admin.site.register(User_Preferred_Store)
admin.site.register(User_Preferred_Tag)