# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

from django.views.decorators.csrf import csrf_protect
from django.template import RequestContext

from books.models import Book, Author, Category

def index(request):
  return HttpResponse("Hello world.")

def detail(request, book_id):
  book = get_object_or_404(Book, pk=book_id)
  return render_to_response('books/index.html', {'book': book}, context_instance=RequestContext(request))

def add(request):
  return render_to_response('books/add.html');

@csrf_protect
def maintenance(request):
  tmpl = 'books/admin/maintenance.html'

  resDict = {}
  if request.method == 'POST':
     
    cat = Category()
#    cat.name = request.POST['name.new']
#    print "Trying to save category with name: " + cat.name
#   print "category data is: " + cat.__unicode__()
#    cat.save()
  
  cats = Category.objects.all()
  return render_to_response(
    tmpl, 
    { 'cats' : cats }, 
    context_instance=RequestContext(request)
    )



