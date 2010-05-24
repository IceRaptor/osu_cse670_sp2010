from piston.handler import BaseHandler
from piston.utils import rc

from books.models import Category, State, CCVendor

class NameBaseHandler(BaseHandler):
  allowed_methods = ('GET', 'POST', 'PUT', 'DELETE')

  # Invoked on a GET
  #def read(self, request):
  #  print "Reached GET method"
  
  # Invoked on a POST
  def create(self, request):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    if request.content_type:
      data = request.data['data']

      entity = self.model(name=data['name'])
      entity.save()
      return rc.CREATED

  # Invoked on PUT
  def update(self, request, id):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    if request.content_type:
      data = request.data['data']
      entity = self.model.objects.get(id=id)

      ''' SHould be a try/catch in case of key conflict'''
      entity.name = data['name']

      entity.save()
      return rc.CREATED

  # Invoked on a DELETE
  def delete(self, request, id):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    entity = self.model.objects.get(id=id)
    if entity != None:
      entity.delete()
  
class CategoryHandler(NameBaseHandler):
  fields = ('id', 'name')
  model = Category

class StateHandler(NameBaseHandler):
  fields = ('id', 'name', 'abbr')
  model = State

class CCVendorHandler(NameBaseHandler):
  fields = ('id', 'name')
  model = CCVendor

