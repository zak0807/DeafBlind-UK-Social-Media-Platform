import re
import bcrypt
from flask import session, flash, request

from connection import query

def valid_email(email):
    """
    Checks if the email is valid
    Returns True if valid, False if not
    """

    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

    if(re.fullmatch(regex, email)):
        return True
    return False

def password_check(password: str):
    """
    Validates the password
    Returns True if valid, False if not
    """

    try:
        # calculating the length
        length_error = len(password) < 8

        # searching for digits
        digit_error = re.search(r"\d", password) is None

        # searching for uppercase
        uppercase_error = re.search(r"[A-Z]", password) is None

        # searching for lowercase
        lowercase_error = re.search(r"[a-z]", password) is None

        # searching for symbols
        symbol_error = re.search(r"[ @!#$%&'()*+,-./[\\\]^_`{|}~"+r'"]', password) is None

        # overall result
        password_ok = not ( length_error or digit_error or uppercase_error or lowercase_error or symbol_error )
    except:
        password_ok = False

    return password_ok

def get_hashed_password(plain_text_password):
    """
    Returns a hashed password
    Salt stored in the hash itself using bcrypt
    """

    return bcrypt.hashpw(plain_text_password.encode('utf8'), bcrypt.gensalt())

def check_password(plain_text_password, hashed_password):
    """
    Checks if the password is correct against the stored hash
    """

    return bcrypt.checkpw(plain_text_password.encode('utf8'), hashed_password.encode('utf8'))

def empty(text):
    """
    Checks if the value is empty
    """

    if(len(text)>0):
        return False
    return True

def logged_out():
    """
    Checks if user is logged out
    False if logged in, True if logged out 
    """

    if not(session.permanent):
        flash("Log in to access rest of site")
        return True
    return False

def logged_in():
    """
    Checks if user is logged in
    True if logged in, False if logged out 
    """

    if (session.permanent):
        flash("Already logged in")
        return True
    print(session.permanent)
    return False