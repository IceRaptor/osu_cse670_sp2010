from django.db import models

# Create your models here.

class Category(models.Model):
  name = models.CharField(max_length=64, unique=True)

  def __unicode__(self):
    return self.name

class CCVendor(models.Model):
  name = models.CharField(max_length=64, unique=True)

  def __unicode__(self):
    return self.name

class State(models.Model):
  abbr = models.CharField(max_length=64, unique=True)
  name = models.CharField(max_length=64, unique=True)

  def __unicode__(self):
    return "%s (%s)" % (name, abbr)

class Review(models.Model):
  text = models.CharField(max_length=1024)

  def __unicode__(self):
    return self.text

class Author(models.Model):
  # Need a unique key across both fname + lname
  fname = models.CharField(max_length=64)
  lname = models.CharField(max_length=64)

  def __unicode__(self):
    return self.fname + " " + self.lname

class Book(models.Model):
  isbn = models.IntegerField(unique=True)
  title = models.CharField(max_length=256)
  price = models.FloatField()
  min_qty = models.IntegerField("minimum quantity")
  publisher = models.CharField(max_length=256)
  pub_date = models.DateTimeField("date published")
  category = models.ForeignKey(Category)
  authors = models.ManyToManyField(Author)
  reviews = models.ManyToManyField(Review)

  def __unicode__(self):
    return "ISBN(%s)" % (self.isbn)


