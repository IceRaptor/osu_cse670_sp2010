from django.conf.urls.defaults import *

urlpatterns = patterns('',
  (r'^/$', 'books.views.index'),
  (r'^add/', 'books.views.add'),
  (r'^(?P<book_id>\d+)/detail/', 'books.views.detail'),
  (r'^(?P<book_id>\d+)/modify/', 'books.views.modify'),
  (r'^add/', 'books.views.add'),
  (r'^admin/maintenance', 'books.admin.views.maintenance'),
  (r'^admin/insert_book', 'books.admin.views.insert_book'),

)

