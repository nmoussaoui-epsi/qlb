# QLB Project

## Introduction
QLB is developed by a digital web agency specializing in creating efficient and user-friendly web applications. Our goal is to deliver high-quality software solutions tailored to meet the specific needs of our clients.

## Prerequisites
Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- Django 3.2 or higher
- pip (Python package installer)
- Git

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/nmoussaoui-epsi/qlb.git
cd qlb
```

### Step 2: Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Apply Migrations
```bash
python manage.py migrate
```

### Step 5: Run the Development Server
```bash
python manage.py runserver
```

## Usage
To start using the project, navigate to `http://127.0.0.1:8000/` in your web browser. You should see the homepage of the QLB project.

## Contributing
If you wish to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Contact
For any questions or issues, please contact contact@qlb.com.
