import os, copy, json, collections
from flask import Flask, jsonify, request, send_from_directory, url_for, redirect, make_response, render_template, abort
from flask.ext.cors import CORS
from flask.ext import assets
app = Flask(__name__, static_url_path='')

# get root
@app.route("/")
def index():
    return app.make_response(open('app/index.html').read())

@app.route("/statewide")
def statewide():
    return app.make_response(open('app/statewide.html').read())
    
@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('app/assets/', path)

if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5050))
	app.run(host='0.0.0.0', port=port, debug=False) # set debug=True if you want to have auto-reload on changes
# this is great for developing