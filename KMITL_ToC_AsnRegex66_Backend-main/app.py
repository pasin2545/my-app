import scraping_ver_06
from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)
@app.get("/all_temples")
def get_temples():
    return jsonify(scraping_ver_06.get_temples_data())

@app.get("/province_temple/<string:province_name>")
def get_temple_in_province(province_name):
	try:
		province_name = province_name.strip().lower()
		res = scraping_ver_06.get_temples_data(province_name)
		return jsonify([x for key in res for x in res[key]])
	except ValueError:
		return "Province not supported", 400

app.run(debug=False, port=5001)