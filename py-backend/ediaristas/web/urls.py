from django.urls import path
from .views import cadastrar_diaristas, listar_diaristas

urlpatterns = [
    path('cadastrar_diaristas', cadastrar_diaristas, name='cadastrar_diaristas'),
    path('listar_diaristas', listar_diaristas, name='listar_diaristas')
]