from django.db import models

# Create your models here.

class Book(models.Model):
  isbn = models.IntegerField()
  publisher = models.CharField(max_length=256)
  pub_date = models.DateTimeField("date published")

  def __unicode__(self):
    return self.isbn

class Review(models.Model):
  text = models.CharField(max_length=1024)

  def __unicode__(self):
    return self.text

class Author(models.Model):
  fname = models.CharField(max_length=64)
  lname = models.CharField(max_length=64)

  def __unicode__(self):
    return self.fname + " " + self.lname
