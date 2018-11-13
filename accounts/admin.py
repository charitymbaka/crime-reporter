from django.contrib import admin
from accounts.models import User

# Register your models here.
admin.site.register(User)


#class UserModelAdmin(admin.ModelAdmin):
 # list_display = ["full_name", "last_name", "email", "timestamp"]
  #list_filter = ["category", "timestamp"]
  #list_display_links = ["updated"]
  #list_editable = ["title"]
  #list_filter = ["updated", "timestamp"]

  #search_fields = ["title", "content"]
  #class Meta:
   # model = User
#class UserModelAdmin

#admin.site.register(Post, PostModelAdmin)