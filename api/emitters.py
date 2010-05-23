from django.utils import simplejson
from django.core.serializers.json import DateTimeAwareJSONEncoder

from piston.emitters import Emitter

class ExtJSONEmitter(Emitter):
  '''
    JSON Emitter wraps results in object liters for Ext JS
  '''

  def render(self, request):
    cb = request.GET.get('callback')
    ext_dict = { 
      'success' : True, 
      'data' : self.construct(), 
      'message' : ""
    }
    seria = simplejson.dumps(ext_dict, cls=DateTimeAwareJSONEncoder, ensure_ascii=False, indent=4)
    
    # Callback
    if cb:
      return '%s(%s)' % (cb, seria)

    return seria

Emitter.register('ext-json', ExtJSONEmitter, 'application/json; charset=utf-8')
print "Registered emitter"

