from django.urls import path
from .views import cadastrar_diaristas
urlpatterns = [
    path('cadastrar_diaristas', cadastrar_diaristas, name='cadastrar_diaristas')
]