from django.conf.urls.defaults import *
from piston.resource import Resource

from api.handlers import *
from api.emitters import ExtJSONEmitter

category_res = Resource(CategoryHandler)
state_res = Resource(StateHandler)
ccvendor_res = Resource(CCVendorHandler)
author_res = Resource(AuthorHandler)
review_res = Resource(ReviewHandler)
book_res = Resource(BookHandler)

urlpatterns = patterns('',
  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),

  url(r'^states/(?P<id>\d+)$', state_res, {'emitter_format' : 'ext-json'} ),
  url(r'^states$', state_res, { 'emitter_format' : 'ext-json' }),

  url(r'^ccvendors/(?P<id>\d+)$', ccvendor_res, {'emitter_format' : 'ext-json'} ),
  url(r'^ccvendors$', ccvendor_res, { 'emitter_format' : 'ext-json' }),

  url(r'^authors/(?P<id>\d+)$', author_res, {'emitter_format' : 'ext-json'} ),
  url(r'^authors$', author_res, { 'emitter_format' : 'ext-json' }),

  url(r'^reviews/(?P<id>\d+)$', review_res, {'emitter_format' : 'ext-json'} ),
  url(r'^reviews$', review_res, { 'emitter_format' : 'ext-json' }),

  url(r'^books/(?P<id>\d+)$', book_res, {'emitter_format' : 'ext-json'} ),
  url(r'^books$', book_res, { 'emitter_format' : 'ext-json' }),
)

'''
  url(r'^categories/(?P<id>\d+)$', category_res ),
  url(r'^categories$', category_res ),

  url(r'^categories/(?P<id>\d+)$', category_res, {'emitter_format' : 'ext-json'} ),
  url(r'^categories$', category_res, { 'emitter_format' : 'ext-json' }),
'''

