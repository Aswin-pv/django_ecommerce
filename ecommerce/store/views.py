from django.shortcuts import render,get_object_or_404
from .models import Product
from core.models import Category

def store(request, category_slug = None):
    categories = None
    products = None

    # CONDITION TO CHECK WHETHER THE USER PASSES ANY SLUG VALUE
    if category_slug != None:
        categories = get_object_or_404(Category, slug=category_slug)
        products = Product.objects.all().filter(category=categories, is_available = True)
        product_count = products.count()
    else:   
        products = Product.objects.all().filter(is_available = True)
        product_count = products.count()

    return render(request, 'store/store.html', context={'products' : products,'product_count': product_count})


def product_detail(request, category_slug, product_slug):

    products = Product.objects.all()
    return render(request, 'store/product_details.html',context={'products' : products })