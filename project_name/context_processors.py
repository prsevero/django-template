
from django.conf import settings


def settings_debug(request):
    '''
    Return value of the DEBUG to template
    Used to put or not: analytics, live reload
    '''
    return {'DEBUG': settings.DEBUG}


def menu_active(request):
    '''
    Return the MENU to template
    Used to set what menu is active
    '''
    try:
        menu = request.META['PATH_INFO'].split('/')[1]
    except IndexError:
        menu = ''
    return {
        'menu': menu
    }
