# Generated by Django 2.1.5 on 2019-02-19 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0007_auto_20190219_1555'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carboncoinccy',
            name='date',
            field=models.DateField(),
        ),
    ]