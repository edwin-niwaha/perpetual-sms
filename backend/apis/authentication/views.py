from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse

from rest_framework import generics, permissions
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny


def home(request):
    data = {"message": "Welcome to the home page!", "status": "success"}
    return JsonResponse(data)


# Create your views here
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
