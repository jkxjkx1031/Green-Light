# Generated by Django 2.1.5 on 2019-02-10 17:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0004_account_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='EnergyAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('energy', models.IntegerField(default=0)),
                ('last_refreshed', models.DateTimeField()),
                ('account', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='trade.Account')),
            ],
        ),
    ]
