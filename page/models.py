from django.db import models
from django.db import connections

# User represents the users table from the db.
# Naming convention states to name classes without plurality since it'll give them 2 s's in the admin page (e.g. Userss). 
class User(models.Model):
    # Implementation of the columns from the table. There's documentation on what field each should be online.

    # Note 1: make sure stuff like max_length match with db implementation, if applicable.

    # Note 2: You can only set one primary key per class, multiple primary keys ex is shown in User_Preferred_Store class.

    # Note 3: If you don't define a primary key, django will get mad at you looking for an id column that doesn't exist. Don't forget it.
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=45)
    password = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=45)

    # Always include this to specify which table in db you wanna use.
    class Meta:
        db_table = "users"
    
    # Totally unnecessary, only for viewing pleasure in admin panel.
    def __str__(self):
        return str(self.user_id)


class Grocery_Store(models.Model):
    store_id = models.AutoField(primary_key=True)
    store_name = models.CharField(max_length=45)
    store_address = models.CharField(max_length=45)
    store_image = models.CharField(max_length=100)

    class Meta:
        db_table = "grocery_stores"
    
    def __str__(self):
        return str(self.store_id)

class Delivery_Driver(models.Model):
    driver_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    average_rating = models.PositiveSmallIntegerField()

    class Meta:
        db_table = "delivery_drivers"
    
    def __str__(self):
        return str(first_name) + " " + str(last_name)

class Grocery_Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=45)

    class Meta:
        db_table = "grocery_products"

class Grocery_Tag(models.Model):
    grocery_tag_id = models.AutoField(primary_key=True)
    grocery_tag = models.CharField(max_length=45)

    class Meta:
        db_table = "grocery_tags"
    
    def __str__(self):
        return "Grocery tag id " + str(self.grocery_tag_id) + ": " + str(self.grocery_tag)

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    driver = models.ForeignKey(Delivery_Driver, on_delete=models.CASCADE)
    purchase_date = models.DateField()
    total_price = models.DecimalField(max_digits=65, decimal_places=2)
    order_success = models.BooleanField()
    note = models.CharField(max_length=45)

    class Meta:
        db_table = "orders"
        unique_together = (('order_id', 'user_id', 'driver_id'))
    
    def __str__(self):
        return str(self.order_id)

class Order_Store(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, primary_key=True)
    store = models.OneToOneField(Grocery_Store, on_delete=models.CASCADE)

    class Meta:
        db_table = "order_stores"
        unique_together = (('order_id', 'store_id'))
    
    def __str__(self):
        return "Order id " + str(self.order) + ": " + str(self.store_id)

class Order_Item(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, primary_key=True)
    product = models.OneToOneField(Grocery_Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=65, decimal_places=2)

    class Meta:
        db_table = "order_items"
        unique_together = (('order_id', 'product_id'))
    
    def __str__(self):
        return "Order id " + str(self.order) + ": " + str(self.product_id)

class Grocery_Store_Stock(models.Model):
    store = models.OneToOneField(Grocery_Store, on_delete=models.CASCADE, primary_key=True)
    product = models.OneToOneField(Grocery_Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=65, decimal_places=2)

    class Meta:
        db_table = "grocery_store_stocks"
        unique_together = (('store_id', 'product_id'))
    
    def __str__(self):
        return str(self.store) + ": " + str(self.product_id)

class User_Preferred_Store(models.Model):
    # Example of one-to-one table with two primary foreign keys. OneToOneField replaces ForeignKey field.
    
    # In parenthesis: User is the primary key class, keep same for on_delete, and set only one as primary_key=True.

    # For these variables, don't include the _id after them since django automatically does that for some ungodly reason.
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    store = models.OneToOneField(Grocery_Store, on_delete=models.CASCADE)

    # Since we have 2 primary keys, must include unique_together variable that has all primary keys.
    class Meta:
        db_table = "user_preferred_stores"
        unique_together = (('user_id', 'store_id'))
    
    # weird str class since user doesn't need _id but store does, idk why but it works
    def __str__(self):
        return "User id " + str(self.user) + ": " + str(self.store_id)

class User_Preferred_Tag(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    grocery_tag = models.OneToOneField(Grocery_Tag, on_delete=models.CASCADE)

    class Meta:
        db_table = "user_preferred_tags"
        unique_together = (('user_id', 'grocery_tag_id'))
    
    def __str__(self):
        return "User id " + str(self.user) + ": " + str(self.grocery_tag_id)