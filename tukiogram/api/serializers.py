from rest_framework.serializers import HyperlinkedModelSerializer,DateTimeField
from rest_framework_gis.serializers import GeoFeatureModelSerializer

from accounts.models import User
from tukiogram.models import Tukio, Station


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'first_name', 'last_name', 'email')


class TukioSerializer(GeoFeatureModelSerializer):
    date = DateTimeField(source='timestamp',format="%d-%m-%Y")

    class Meta:
        model = Tukio
        geo_field = 'location_geom'
        fields = ('user', 'desc', 'date','timestamp', 'category', 'location_name')


class StationSerializer(GeoFeatureModelSerializer):

    class Meta:
        model = Station
        geo_field = 'location_geom'
        fields = ('name', 'helpline')
