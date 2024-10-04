from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'index.html')

def terms_and_conditions(request):
    return render(request, 'terms_and_conditions.html')

def privacy_policy(request):
    return render(request, 'privacy_policy.html')
