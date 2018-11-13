from rest_framework import generics

from tukiogram.api.serializers import TukioSerializer, StationSerializer
from tukiogram.models import Tukio, Station


class TukioListView(generics.ListAPIView):
    queryset = Tukio.objects.all()
    serializer_class = TukioSerializer


class TukioCreateAPIView(generics.CreateAPIView):
    queryset = Tukio.objects.all()
    serializer_class = TukioSerializer


class StationListView(generics.ListAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer
