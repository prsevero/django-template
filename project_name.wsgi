"""
WSGI configuration for KingHost
Inspiration: https://gist.github.com/douglasmiranda/1232693 and @hmleal
"""

import os
import sys

# Settings
PROJECT_NAME = '{{ project_name }}'

# Calculates the path based on location of WSGI script.
apache_configuration = os.path.realpath(os.path.dirname(__file__))
project = os.path.join(apache_configuration, PROJECT_NAME)
virtualenv = os.path.expanduser('~/.virtualenvs/%s_env/lib/python2.6/site-packages' % PROJECT_NAME)

# Append de configuration
sys.path.append(apache_configuration)
sys.path.append(project)
sys.path.insert(0, virtualenv)

os.environ['PYTHON_EGG_CACHE'] = os.path.expanduser('~/apps_wsgi/.python-eggs')
os.environ['DJANGO_SETTINGS_MODULE'] = '%s.settings' % PROJECT_NAME

# This application object is used by any WSGI server configured to use this
# file. This includes Django's development server, if the WSGI_APPLICATION
# setting points here.
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
