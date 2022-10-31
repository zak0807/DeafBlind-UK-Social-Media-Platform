from tabnanny import check
from flask import Flask, redirect, url_for, render_template, request, session, flash

from face import *
from getpass import getpass
from mysql.connector import connect, Error
import numpy as np
from PIL import Image,ImageEnhance
from colorblind import colorblind
import cv2
from datetime import timedelta
from cv2 import cvtColor

import hiddenpy

app = Flask(__name__)

app.secret_key = "top task"
app.permanent_session_lifetime = timedelta(minutes=60)


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html", google_auth_key = hiddenpy.google_auth_key.get("key"))



@app.route("/login/", methods=["POST", "GET"])
def login():
    return render_template("login.html")


@app.route("/signup/", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        firstname = request.form["forename"]
        surname = request.form["surname"]
        name = firstname, surname
        email = request.form["email"]
        dob = request.form["dateofbirth"]
        impairment = request.form["impairment"]
        checkFace(0, arr=[dob, name, impairment])

    return render_template("signup.html")

def checkFace(mode, arr):
    auth = False
    if mode == 0:
        image = take_picture()
        if detect_faces(image) == 1:
            auth = True
            try:
                with connect(
                    host = hiddenpy.server_key.get("host"),
                    user = hiddenpy.server_key.get("user"),
                    password = hiddenpy.server_key.get("pass"), 
                    db = hiddenpy.server_key.get("name")
                ) as connection:
                    print(connection)
            except Error as e:
                print(e)
            
            query1 = """COUNT(user_id) FROM Users;"""
            with connection.cursor() as cursor:
                cursor.execute(query1)
                result = cursor.fetchall()
                for row in result:
                    if row == None:
                        user_id = 1
                    user_id = int(row) + 1
            
            query2 = """"INSERT INTO Users VALUES (%s, %s, %s, %s, %s)"""
            with connection.cursor() as cursor:
                cursor.execute(query2, params=(user_id, arr[0], arr[1], arr[2], convert_binary_data(image)))
                connection.commit()
        else:
            return "Please try again with a single face."

    return auth

@app.route("/profile/", methods=["POST", "GET"])
def profile():
    return render_template("profile.html")

@app.route("/forum/", methods=["POST", "GET"])
def forum():
    return render_template("forum.html")

@app.route("/thread<number>/", methods=["POST", "GET"])
def thread(number):
    print(number)
    return render_template("thread.html")

@app.route("/events/", methods=["POST", "GET"])
def events():
    return render_template("events.html")

#finds people with the same disability and same city
@app.route("/findFriends/", methods=["POST", "GET"])
def findFriends():
    return render_template("findFriends.html")

#post image
@app.route("/post/", methods=["POST", "GET"])
def post():
    return render_template("post.html")

@app.route('/transform', methods=['GET', 'POST'])
def transform():
    if request.method == "POST":
        image = request.files.get('image')    
        option=request.args.get('colourblinds')
        contrast=request.args.get('contrast')
    
    img_contr_obj=ImageEnhance.Contrast(image)
    img=img_contr_obj.enhance(contrast)

    if option=="protanopia":
        image = colorblind.daltonize_correct(image, colorblind_type='protanopia')
    if option=="Deuteranopia":
        image = colorblind.daltonize_correct(image, colorblind_type='Deuteranopia')
    if option=="Tritanopia":
        image = colorblind.daltonize_correct(image, colorblind_type='Tritanopia')

    return render_template('submit.html', img= image)



if __name__ == "__main__":
    app.run(debug=True)
