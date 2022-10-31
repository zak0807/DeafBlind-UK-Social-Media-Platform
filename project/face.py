""" ------- facial recognition imports -------- """
#METHOD 1
from __future__ import print_function, unicode_literals
from facepplib import FacePP, exceptions
import emoji

#METHOD 2
from deepface import DeepFace

""" ------- tkinter window imports -------- """
import re
import cv2
from cv2 import VideoCapture, imread, cvtColor
import os
import datetime
import numpy as np

import hiddenpy

def detect_faces(image):
    casc_path = "haarcascade_frontalface_default.xml"
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + casc_path)
    grey = cvtColor(image, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(
        grey,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(30, 30),
        flags = cv2.CASCADE_SCALE_IMAGE
    )

    return len(faces)

def face_detection(image):
    message = ""
    if(detect_faces(image)<1):
        message = False
            
    if(detect_faces(image)>1):
        message = True
    
    return message

def take_picture():
    cam_port = 0
    cam = VideoCapture(cam_port)

    result, image = cam.read()
    return image

def remove_local_image(filepath):
    if os.path.exists(filepath):
        os.remove(filepath)
        return True
    else:
        return False

def clear_empty_record():
    record = (False,)
    query("""
        DELETE FROM user
        WHERE Image = %s""", record)

""" ------- facial recognition -------- """
# Python program for facial comparison

def convert_binary_data(file):
    return file.tostring()

def convert_image(data):
    # Convert binary data to proper format and write it on Hard Disk
    return np.frombuffer(data, np.float32)

"""
    Built with multiple methods, in order of ease to implement
    The later the model, the more efficient / refactorable with growth is possible
"""

# define face comparing function
def face_comparing(image1:str, image2:str):
    compare = False
    
    while True:
        #METHOD 1
        try:
            # api details
            api_key = hiddenpy.face_key.get("key")
            api_secret = hiddenpy.face_key.get("sec")
            app = FacePP(api_key = api_key, api_secret = api_secret)

            #compares 2 images based on online url
            cmp_ = app.compare.get(image_url1 = image1,
                                image_url2 = image2)
        
            # Comparing Photos
            compare = cmp_.confidence > 70
            break
        except:
            pass
    
        try:
            #METHOD 2
            confirmed_img = cv2.imread(image1)
            check_img = cv2.imread(image2)

            # Comparing Photos
            results = DeepFace.verify(confirmed_img,check_img, enforce_detection=False)
            compare = results["verified"]

            break
        except:
            pass
            
        try:
            #METHOD 3
            import face_recognition

            confirmed_img = face_recognition.load_image_file('path')
            confirmed_img_encoding = face_recognition.face_encodings(confirmed_img)[0]

            check_img = face_recognition.load_image_file('path')
            check_img_encoding = face_recognition.face_encodings(check_img)[0]

            # Comparing Photos
            results = face_recognition.compare_faces([confirmed_img_encoding], check_img_encoding)
            compare = results[0]
            break
        except:
            pass
        break

    return compare