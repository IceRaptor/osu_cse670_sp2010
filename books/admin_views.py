# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

from books.models import Book, Author

def index(request):
  return HttpResponse("Hello world.")

def detail(request, book_id):
  book = get_object_or_404(Book, pk=book_id)
  return render_to_response('books/index.html', {'book': book}, context_instance=RequestContext(request))

def add(request):
  return render_to_response('books/add.html');

def maintenance(request):
  return render_to_response('books/admin/maintenance.html')
