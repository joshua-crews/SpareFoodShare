from .views import *
from django.urls import path

from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path('', getApiRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegistrationView.as_view()),
    path('item/', SingleItemView.as_view()),
    path('items/', InfiniteItemsView.as_view()),
    path('myitems/', InfiniteMyItemsView.as_view()),
    path('items/upload/', CreateItemView.as_view()),
    path('orders/create/', CreateOrderView.as_view()),
    path('orders/', OrdersView.as_view()),
    path('chats/', ChatsView.as_view()),
    path('chats/messages/', MessagesView.as_view()),
    path('sales/', SalesView.as_view()),
    path('item_operations/', ItemOperationsView.as_view()),
    path('activate/<uidb64>/<token>', views.activate_account, name='activate'),
    path('user/update_profile/', UserProfileUpdateView.as_view()),
]
