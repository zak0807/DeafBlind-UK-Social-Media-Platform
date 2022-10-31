from requests import request
from project.face import *
from getpass import getpass
from mysql.connector import connect, Error

def checkFace(mode):
    auth = False
    if mode == 0:
        image = take_picture()
        if detect_faces(image) == 1:
            auth = True
            try:
                with connect(
                    host = "ec2-52-31-19-223.eu-west-1.compute.amazonaws.com",
                    user = "team5",
                    password = "Team5!!", 
                    db = "deafblind"
                ) as connection:
                    print(connection)
            except Error as e:
                print(e)
            
            query1 = """COUNT(user_id) FROM Users;"""
            with connection.cursor() as cursor:
                cursor.execute(table_query)
                result = cursor.fetchall()
                for row in result:
                    if row == null:
                        user_id = 1
                    user_id = int(row) + 1
            
            query2 = """"INSERT INTO Users VALUES (%s, %s, %s, %s, %s)"""
            with connection.cursor() as cursor:
                cursor.execute(query2, params=(user_id, dob, name, impairment, image))
                connection.commit()
        else:
            return "Please try again with a single face."

    return auth
