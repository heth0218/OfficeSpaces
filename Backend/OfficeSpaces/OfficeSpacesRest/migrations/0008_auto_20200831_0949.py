# Generated by Django 2.2.13 on 2020-08-31 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OfficeSpacesRest', '0007_auto_20200829_1305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mask_in_public',
            name='number_of_violations',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='social_distancing_violation',
            name='number_of_violations',
            field=models.IntegerField(),
        ),
    ]
