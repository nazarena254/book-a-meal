# Generated by Django 4.0.5 on 2022-07-03 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealapp', '0004_menu_option'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='menu'),
        ),
    ]
