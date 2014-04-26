from si4703 import si4703

from flask import Flask
from flask import render_template, request, redirect, jsonify
 
fm = si4703.si4703()
fm.init()

app = Flask( __name__ )
#app.debug = True

def get_volume():
    return fm.get_volume()

def get_channel():
    return fm.get_channel()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/info')
def info():
    return jsonify( volume = get_volume(), channel = get_channel() )

@app.route('/seek_right')
def seek_right():
    fm.seek_right()
    return jsonify( volume = get_volume(), channel = get_channel() )

@app.route('/seek_left')
def seek_left():
    fm.seek_left()
    return jsonify( volume = get_volume(), channel = get_channel() )

@app.route('/volume_up')
def volume_up():
    fm.volume_up()
    return jsonify( volume = get_volume(), channel = get_channel() )

@app.route('/volume_down')
def volume_down():
    fm.volume_down()
    return jsonify( volume = get_volume(), channel = get_channel() )
