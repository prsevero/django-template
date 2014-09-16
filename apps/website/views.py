
# -*- coding: utf-8 -*-

from django.shortcuts import render


def home(request):
    '''
    Address: /
    '''

    return render(request, 'home.html')
