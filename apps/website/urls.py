
from django.conf.urls import patterns, url


urlpatterns = patterns(
    'apps.website.views',
    url(r'^$', 'home', name='home'),
)
