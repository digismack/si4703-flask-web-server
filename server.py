from si4703 import si4703

from flask import Flask
from flask import render_template, request, redirect, jsonify

fm = si4703.si4703()
fm.init()

app = Flask( __name__ )
app.debug = True

def get_radio_properties():
    volume = fm.SYS_CONFIG_2.VOLUME
    channel = fm.get_channel()
    return { 'volume' : volume, 'channel' : channel }

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/seek_right')
def seek_right():
    fm.seek_right()
    return jsonify( get_radio_properties() )

@app.route('/seek_left')
def seek_left():
    fm.seek_left()
    return jsonify( get_radio_properties() )

@app.route('/volume_up')
def volume_up():
    fm.volume_up()
    return jsonify( get_radio_properties() )

@app.route('/volume_down')
def volume_down():
    fm.volume_down()
    return jsonify( get_radio_properties() )
