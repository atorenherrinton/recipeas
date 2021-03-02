from bs4 import BeautifulSoup, NavigableString, Comment
from flask import Flask, request
import requests
app = Flask(__name__)


@app.route('/recipe', methods=["POST"])
def get_result():
    result = request.json
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
