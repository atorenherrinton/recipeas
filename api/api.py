import time
from flask import Flask

app = Flask(__name__)

@app.route('/recipe')
def get_allrecipe():
    return {'recipe': 'Here is your recipe'}