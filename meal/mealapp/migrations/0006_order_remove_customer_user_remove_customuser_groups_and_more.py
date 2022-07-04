# Generated by Django 4.0.5 on 2022-07-03 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealapp', '0005_menu_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='customer',
            name='user',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='user_permissions',
        ),
        migrations.RemoveField(
            model_name='option',
            name='menu',
        ),
        migrations.AddField(
            model_name='menu',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=5, null=True),
        ),
        migrations.DeleteModel(
            name='Caterer',
        ),
        migrations.DeleteModel(
            name='Customer',
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
        migrations.DeleteModel(
            name='Option',
        ),
        migrations.AddField(
            model_name='order',
            name='menu',
            field=models.ManyToManyField(related_name='orders', to='mealapp.menu'),
        ),
    ]
