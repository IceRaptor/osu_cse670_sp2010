from django.conf.urls.defaults import *

urlpatterns = patterns('',
  (r'^/$', 'books.views.index'),
  (r'^add/', 'books.views.add'),
  (r'^(?P<book_id>\d+)/detail/', 'books.views.detail'),
  (r'^(?P<book_id>\d+)/modify/', 'books.views.modify'),
  (r'^add/', 'books.views.add'),
  (r'^admin/$', 'books.admin.views.index'),
  (r'^admin/insert_book', 'books.admin.views.insert_book'),
  (r'^admin/modify_book', 'books.admin.views.modify_book'),
  (r'^admin/update_book', 'books.admin.views.update_book'),
  (r'^admin/manage_catalog', 'books.admin.views.manage_catalog'),
  (r'^admin/place_order', 'books.admin.views.place_order'),
  (r'^admin/maintenance', 'books.admin.views.maintenance'),
  (r'^admin/update_admin', 'books.admin.views.update_admin'),

)

