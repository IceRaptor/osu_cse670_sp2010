from piston.handler import BaseHandler
from piston.utils import rc

import simplejson as json

from books.models import Category, State, CCVendor, Author, Review, Book

class RestfulHandler(BaseHandler):
  allowed_methods = ('GET', 'POST', 'PUT', 'DELETE')

  # Invoked on a GET
  #def read(self, request):
  #  print "Reached GET method"
  
  # Invoked on a POST
  def create(self, request, *args, **kwargs):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    if 'data' in request.data:
      posted_data = request.data['data']
      attrs = self.flatten_dict(posted_data)

      try:
        entity = self.model.objects.get(**attrs)
        return rc.DUPLICATE_ENTRY
      except self.model.DoesNotExist:
        entity = self.model(**attrs)
        entity.save()
        return entity
      except self.model.MultipleObjectsReturned:
        return rc.DUPLICATE_ENTRY

  # Invoked on PUT
  def update(self, request, id, *args, **kwargs):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    if 'data' in request.data:
      posted_data = request.data['data']
      attrs = self.flatten_dict(posted_data)
      attrs['id'] = id
      print "Update attributes are: %s" % attrs

      try:
        entity = self.model(**attrs)
        entity.save()
        return entity
      except self.model.MultipleObjectsReturned:
        print "Found multiple objects of this type"
        return rc.DUPLICATE_ENTRY


  # Invoked on a DELETE
  def delete(self, request, id):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    entity = self.model.objects.get(id=id)
    if entity != None:
      entity.delete()
  
class CategoryHandler(RestfulHandler):
  fields = ('id', 'name')
  model = Category

class StateHandler(RestfulHandler):
  fields = ('id', 'name', 'abbr')
  model = State

class CCVendorHandler(RestfulHandler):
  fields = ('id', 'name')
  model = CCVendor

class AuthorHandler(RestfulHandler):
  fields = ('id', 'fname', 'lname')
  model = Author

class ReviewHandler(RestfulHandler):
  fields = ('id', 'text')
  model = Review

class BookHandler(RestfulHandler):
  fields = ('id', 'isbn', 'title', 'publisher', 'pub_year', 'price', 'category', 'min_qty', 'reviews', 'authors')
  model = Book
