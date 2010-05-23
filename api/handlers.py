from piston.handler import BaseHandler

from books.models import Category

class CategoryHandler(BaseHandler):
  fields = ('id', 'name')
  model = Category

  def create(self, request, *args, **kwargs):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    attrs = self.flatten_dict(request.POST)
    if attrs.has_key('data'):
      ext_posted_data = simplejson.loads(request.POST.get('data'))
      attrs = self.flatten_dict(ext_posted_data) 

    try:
      inst = self.model.objects.get(**attrs)
      return rc.DUPLICATE_ENTRY
    except self.model.DoesNotExist:
      inst = self.model(**attrs)
      inst.save()
      return inst
    except self.model.MultipleObjectsReturned:
      return rc.DUPLICATE_ENTRY


  def update(self, request, id):
    if not self.has_model():
      return rc.NOT_IMPLEMENTED

    attrs = self.flatten_dict(request.POST)
    if attrs.has_key('data'):
      ext_posted_data = simplejson.loads(request.POST.get('data'))
      attrs = self.flatten_dict(ext_posted_data) 

    inst = self.model.objects.get(id=id)
    inst.name = attrs['name']
    if attrs.has_key('complete'):
      inst.complete = attrs['complete']
    else:
      inst.complete = False
    inst.save()
    
    return inst
