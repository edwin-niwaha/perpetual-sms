from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("apis.authentication.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("apis.authentication.urls")),
    path("api-notes/", include("apis.api.urls")),
]
