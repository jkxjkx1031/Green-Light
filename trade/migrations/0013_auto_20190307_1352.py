# Generated by Django 2.1.5 on 2019-03-07 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0012_auto_20190307_1344'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='mail',
        ),
        migrations.AlterField(
            model_name='product',
            name='tel',
            field=models.CharField(default='', max_length=100),
        ),
    ]
