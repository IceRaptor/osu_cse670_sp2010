from django.conf.urls.defaults import *
from piston.resource import Resource

from api.handlers import CategoryHandler, StateHandler, CCVendorHandler
from api.emitters import ExtJSONEmitter

category_res = Resource(CategoryHandler)
state_res = Resource(StateHandler)
ccvendor_res = Resource(CCVendorHandler)

urlpatterns = patterns('',
  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),

  url(r'^states/(?P<id>\d+)$', state_res, {'emitter_format' : 'ext-json'} ),
  url(r'^states$', state_res, { 'emitter_format' : 'ext-json' }),

  url(r'^ccvendors/(?P<id>\d+)$', ccvendor_res, {'emitter_format' : 'ext-json'} ),
  url(r'^ccvendors$', ccvendor_res, { 'emitter_format' : 'ext-json' }),
)

'''
  url(r'^categories/(?P<id>\d+)$', category_res ),
  url(r'^categories$', category_res ),

  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),
'''

