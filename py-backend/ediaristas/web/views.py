from django.shortcuts import render
from .forms import diarista_form

def cadastrar_diaristas(request):
    form_diarista = diarista_form.DiaristaForm()
    return render(request, 'form_diarista.html', {'form_diarista': form_diarista})
