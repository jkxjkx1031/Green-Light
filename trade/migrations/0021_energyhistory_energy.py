# Generated by Django 2.1.5 on 2019-03-21 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0020_auto_20190321_1343'),
    ]

    operations = [
        migrations.AddField(
            model_name='energyhistory',
            name='energy',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
