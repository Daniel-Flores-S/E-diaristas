from django.shortcuts import render
from .forms import diarista_form
from .models import Diarista

def cadastrar_diaristas(request):
    if request.method == "POST":
        form_diarista = diarista_form.DiaristaForm(request.POST, request.FILES)
        if form_diarista.is_valid():
            form_diarista.save()
    else:
        form_diarista = diarista_form.DiaristaForm()
    return render(request, 'form_diarista.html', {'form_diarista': form_diarista})

def listar_diaristas(request):
    diaristas = Diarista.objects.all()
    return render(request, 'listar_diaristas.html', {'diaristas': diaristas})

