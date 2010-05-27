# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

from django.views.decorators.csrf import csrf_protect
from django.template import RequestContext

from books.models import *

def index(request):
  return HttpResponse("Hello world.")

def detail(request, book_id):
  book = get_object_or_404(Book, pk=book_id)
  return render_to_response('books/index.html', {'book': book}, context_instance=RequestContext(request))

def add(request):
  return render_to_response('books/add.html');

@csrf_protect
def maintenance(request):
  context_instance = RequestContext(request)
  template = 'books/admin/maintenance.html'
  resDict = {}

  if request.method == 'POST':
     
    cat = Category()
#    cat.name = request.POST['name.new']
#    print "Trying to save category with name: " + cat.name
#   print "category data is: " + cat.__unicode__()
#    cat.save()
  
  cats = Category.objects.all()
  resDict['cats'] = cats
  return render_to_response( template, resDict, context_instance)

@csrf_protect
def insert_book(request):
  context_instance = RequestContext(request)
  template = 'books/admin/insert_book.html'
  resDict = {}

  if request.method == 'POST':
    print "Found a POST request here..."
    for item in request.POST:
      print "Found item: (%s)" % item

  return render_to_response(template, resDict, context_instance)
