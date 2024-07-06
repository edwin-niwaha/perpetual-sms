## perpetual-sms

# Prerequisites
* Python installed
* Node.js and npm installed
* Create a virtual environment for Python (optional but recommended)

# Create / Prepare Your Environment
When you’re ready to start your new Django web application, create a new folder and navigate into it. In this folder, you’ll set up a new virtual environment using your command line:

- cd backend
```bash   
$ python -m venv .venv

    # Shell
$ python3 -m venv .venv
```

# Activate the virtual environment:
  ```bash
    source .venv/Scripts/activate
    
  # Shell
    source .venv/bin/activate
```

# Install Django and Pin Your Dependencies
Once you’ve created and activated your Python virtual environment, you can install Django into this dedicated development workspace:
(.venv) $
pip install django

## Set Up Django Rest Framework:
(.venv) $
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install drf-social-oauth2
pip install django-cors-headers

## Add to INSTALLED_APPS in myproject/settings.py:
```INSTALLED_APPS = [
     # Local apps
     'api.appname',

     # Third party libraries
     'corsheaders',
     'rest_framework',
     'rest_framework_simplejwt.token_blacklist'
]
```

# Install python libraries
- (env) $
pip freeze > requirements.txt

* Note: Suppose you’re working on an existing project with its dependencies already pinned in a requirements.txt file. In that case, you can install the right Django version as well as all the other necessary packages in a single command: The command reads all names and versions of the pinned packages from your requirements.txt file and installs the specified version of each package in your virtual environment.
- (env) $ 
pip install -r requirements.txt

# Set Up a Django Project
- (env) $ django-admin startproject <projectname>

* Note: If you want to avoid creating the additional top-level project folder, you can add a dot (.) at the end of the django-admin startproject command:
- (env) $ django-admin startproject <projectname> .

# Start a Django App
- (env) $ python manage.py startapp <appname>
||

## Note: To create a new application inside apps folder
- makdir apis
- cd apis
- django-admin startapp <appname>


===================================================================================================
# React Application
- npx create-react-app frontend
- cd frontend

# Install Axios for HTTP Requests:
- npm install axios

# Create Components for API Requests:
- Create a file src/components/Example.js:

# Set Up Proxy for Development:
- In frontend/package.json, add:
- "proxy": "http://localhost:8000"

# Run React Development Server:
npm start

# Connect Django and React
Install django-cors-headers:
pip install django-cors-headers

# Add it to INSTALLED_APPS and middleware in myproject/settings.py:
```INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
```
# cd frontend
npm run build
