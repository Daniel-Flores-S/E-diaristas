from django.urls import path
from .views import cadastrar_diaristas, listar_diaristas, editar_diaristas, remover_diaristas

urlpatterns = [
    path('cadastrar_diaristas', cadastrar_diaristas, name='cadastrar_diaristas'),
    path('listar_diaristas', listar_diaristas, name='listar_diaristas'),
    path('editar_diarista/<int:diarista_id>', editar_diaristas, name='editar_diarista'),
    path('remover_diarista/<int:diarista_id>', remover_diaristas, name='remover_diarista')
]