# Generated by Django 2.1.5 on 2019-03-05 07:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0009_auto_20190304_1431'),
    ]

    operations = [
        migrations.AddField(
            model_name='energyaccount',
            name='last_uploaded',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
