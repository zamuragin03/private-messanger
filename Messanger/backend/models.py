from django.db import models

from django.contrib.auth.models import User


class Message(models.Model):
    text = models.TextField(null=False)
    sender = models.ForeignKey(User, on_delete=models.PROTECT, related_name="sender")
    reciever = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name='reciever'
    )
    sent_at = models.DateTimeField(
        auto_now_add=True,
    )
    def __str__(self) -> str:
        return str(self.id) + self.text

