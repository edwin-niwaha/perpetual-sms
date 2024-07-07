from django.urls import path
from . import views

urlpatterns = [
    path("list/", views.NoteListCreate.as_view(), name="note-list"),
    path("delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
