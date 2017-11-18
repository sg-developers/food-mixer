from flask import Flask
import os
import lib.csv_to_json
import json

import services.parse_dishes_service as parse_dishes_service

app = Flask(__name__)


@app.route('/api/v1/dishes')
def get_dishes():
    data_path = os.path.join(
        os.path.dirname(os.path.realpath(__file__)),
        'data',
        'recipes.csv')

    response = parse_dishes_service.call(
        lib.csv_to_json.convert(data_path)
    )

    return json.dumps(response, ensure_ascii=False)


if __name__ == '__main__':
    app.run()
