from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    # (r'^osu_cse670_sp2010/', include('osu_cse670_sp2010.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),

    (r'^books/$', 'books.views.index'),
    (r'^books/add/', 'books.views.add'),
    (r'^books/(?P<book_id>\d+)/detail/', 'books.views.detail'),
    (r'^books/(?P<book_id>\d+)/modify/', 'books.views.modify'),
    (r'^books/add/', 'books.views.add'),
    (r'^books/admin/maintenance', 'books.admin_views.maintenance'),

    (r'^static/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': 'static'}),

    (r'^api/', include('api.urls')),


)
