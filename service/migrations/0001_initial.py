# Generated by Django 4.2.4 on 2024-12-13 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_image', models.CharField(max_length=50)),
                ('product_title', models.CharField(max_length=50)),
                ('product_des', models.TextField()),
                ('product_price', models.CharField(max_length=10)),
            ],
        ),
    ]
