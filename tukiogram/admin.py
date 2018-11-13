from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin

from tukiogram.models import Tukio, Station

admin.site.site_header = 'The samaritan'


# Register your models here.


class TukioAdmin(LeafletGeoAdmin):
    list_display = ["category", "user", "timestamp"]
    list_filter = ["category", "timestamp"]
    search_fields = ["category"]
    settings_overrides = {
        'DEFAULT_ZOOM': 16,
    }


class StationAdmin(LeafletGeoAdmin):
    list_display = ["name", "helpline"]
    list_filter = ["name"]
    search_fields = ["name"]
    settings_overrides = {
        'DEFAULT_ZOOM': 16,
    }


class Meta:
    model = Tukio

# class TukioAdmin


admin.site.register(Tukio, TukioAdmin)
admin.site.register(Station, StationAdmin)
