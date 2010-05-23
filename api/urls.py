from django.conf.urls.defaults import *
from piston.resource import Resource

from api.handlers import CategoryHandler
from api.emitters import ExtJSONEmitter

category_res = Resource(CategoryHandler)

urlpatterns = patterns('',
  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),
)

'''
  url(r'^categories/(?P<id>\d+)$', category_res ),
  url(r'^categories$', category_res ),

  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),
'''

