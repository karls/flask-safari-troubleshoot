import time
from flask import Flask, request, jsonify
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config['SERVER_NAME'] = 'safari-api-test.development:5050'
    # app.config['PREFERRED_URL_SCHEME'] = 'https'

    CORS(app)

    return app


app = create_app()


@app.route('/test')
def test_route():
    print(f'=== Called /test at time {time.time()} ===')

    # Uncomment to print request headers
    # print('=== Request headers ===')
    # print(request.headers)

    return jsonify({'request': 'Twice?'})
