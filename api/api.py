import time
from flask import Flask, request
app = Flask(__name__)


@app.route('/recipe', methods=["POST"])
def get_result():
    result = request.json
    return {'result': f'result: {result}'}
