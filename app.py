import os
from bs4 import BeautifulSoup, NavigableString, Comment
from flask import Flask, request, render_template, send_from_directory, jsonify, make_response, flash, redirect, url_for, session
from PIL import Image
import string
import random
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging
import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__, static_folder='client/build', static_url_path='')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
default_app = firebase_admin.initialize_app()


@app.route("/api/")
@cross_origin()
def get_result():
    result = request.args.get('url')
    return {'result': parse_site(result)}


def parse_site(site):
    source = requests.get(site).text
    soup = BeautifulSoup(source, 'html.parser')
    title = soup.find(
        "h1", {"class": "headline heading-content"}).text
    imageUrl = soup.find("div", {
        "data-main-recipe": "true"})['data-src']
    description = soup.find(
        "div", {"class": "recipe-summary margin-8-bottom"}).text
    temp_ingredients = soup.find(
        "ul", {"class": "ingredients-section"}).text.split('\n')

    ingredients = [ingredient.strip()
                   for ingredient in temp_ingredients if ingredient.strip()]

    temp_directions = soup.find(
        "fieldset", {"class": "instructions-section__fieldset"}).text.split('\n')

    directions = "\n".join([step.strip() for step in temp_directions if step.strip(
    ) and "Instructions Checklist" not in step and "Advertisement" not in step])

    full_recipe = {
        'title': title,
        'imageUrl': imageUrl,
        'description': description,
        'ingredients': ingredients,
        'directions': directions,
    }

    return full_recipe


@app.route('/upload', methods=['POST'])
def fileUpload():
    if not os.path.isdir(UPLOAD_FOLDER):
        os.mkdir(UPLOAD_FOLDER)
    logger.info("welcome to upload`")
    file = request.files['file']
    filename = random_filename(secure_filename(file.filename))
    image = Image.open(file)
    image.thumbnail((700, 700))
    bucket = storage.bucket()
    blob = bucket.blob(filename)
    blob.upload_from_string(
        image,
        content_type=f'image/{filename.split(".")[1]}'
    )
    session['uploadFilePath'] = destination
    response = f'upload success!'
    return {'result': response}


def random_filename(filename):
    extension = filename.split(".")[1]
    res = ''.join(random.choices(string.ascii_lowercase + string.digits, k=16))
    print(res + extension)
    return f'{res}.{extension}'


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.debug = True
    app.run()

CORS(app, expose_headers='Authorization')
