# Generated by Django 2.1.5 on 2019-03-21 08:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0021_energyhistory_energy'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='energyhistory',
            unique_together={('ea', 'date')},
        ),
    ]
