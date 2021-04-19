"""grofairy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from page.views import *
from grofairy import settings

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    # map page urls to site. value on left can be renamed to anything you wish to be at the beginning of the url
    # e.g. 'page/' to allow for localhost:8000/page/ and /page/about
    path('', include('page.urls')),
    path('user/', UserView.as_view(), name="something"),
    path('grocerystores/', GroceryStoreView.as_view(), name="something"),
    path('groceryproducts/', GroceryStoreStockView.as_view(), name="something2"),
]

urlpatterns += staticfiles_urlpatterns()
