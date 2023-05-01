from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import *
from rest_framework.permissions import *
from .persmissions import *
from django.db.models import Q

from rest_framework_simplejwt.views import TokenObtainPairView


class MessageModel:
    serializer_class = MessageSerializer
    queryset = Message.objects.all()


class GetMessages(MessageModel, generics.ListAPIView):
    permission_classes = (IsOwner,)

    def get(self, request, *args, **kwargs):
        # print(request.user)
        if not request.user.is_staff:
            messages = Message.objects.filter(
                Q(reciever_id=request.user.id) | Q(sender_id=request.user.id)
            )
        else:
            messages = Message.objects.all()
        ser = MessageSerializer(data=messages, many=True)
        ser.is_valid()
        return Response(ser.data)


class SendMessage(MessageModel, generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)


class RegisterApi(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
