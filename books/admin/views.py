# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

from django.views.decorators.csrf import csrf_protect
from django.template import RequestContext

from datetime import date

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

def insert_book(request):
  
  context_instance = RequestContext(request)
  template = 'books/admin/insert_book.html'
  resDict = {}

  if request.method == 'POST':
    print "POST contents are: %s" % request.POST.items()

    # @TODO: Fragile, we expect all data from the UI...
    isbnV = request.POST['isbn']
    print "isbnV = (%s)" % isbnV
    titleV = request.POST['title']
    print "titleV = (%s)" % titleV
    publisherV = request.POST['publisher']
    pub_yearV = date(int(request.POST['pub_year']), 01, 01)
    priceV = request.POST['price']
    min_qtyV = request.POST['min_qty']
    categoryV = request.POST['category']

    authors = request.POST['authors']
    reviews = request.POST['reviews']

    try:
      book = Book.objects.get(isbn=isbnV)
    except Book.DoesNotExist:
      category = Category.objects.get(name=categoryV)
  
      book = Book(
        isbn = isbnV,
        title = titleV,
        publisher = publisherV,
        pub_date = pub_yearV,
        price = priceV,
        min_qty = min_qtyV,
        category = category
      )
      book.save()
      
  return render_to_response(template, resDict, context_instance)
