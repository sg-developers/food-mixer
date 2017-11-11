from flask import Flask

app = Flask(__name__)

import os
import lib.csv_to_json
import json

@app.route('/api/v1/dishes')
def hello_world():
    data_path = os.path.join(
        os.path.dirname(os.path.realpath(__file__)),
        'data',
        'recipes.csv')
    return json.dumps(lib.csv_to_json.convert(data_path), ensure_ascii=False)


if __name__ == '__main__':
    app.run()
