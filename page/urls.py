from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

# all urls must be registered here. Add more by placing some after the comma and ending with a comma.
urlpatterns = [
    # home view for page. go to localhost:8000. '' is default webpage.
    path('', views.home, name='page-home'),
    # dbdump view. go to localhost:8000/dbdump.
    path('dbdump/', views.dbdump, name='page-dbdump'),
    path('grocerystoreslist/', views.grocerystores, name='page-grocerystores')
    
]
