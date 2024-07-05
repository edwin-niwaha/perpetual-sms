from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        message = "Welcome to the Social Authentication (Email) page using React Js and Django!"
        return Response({"message": message})
