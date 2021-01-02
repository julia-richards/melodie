from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', about="testing this stuff out", image_url='tesing this url')

    stjohnswort = User(username='St. John\'s Wort', email='stjohnswort@aa.io', password='password', about="I like pretty sounds.\nPhiladelphia, PA", image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg')

    mudfroot = User(username='Mudfroot', email='mudfroot@aa.io', password='password', about="bluegrass from space", image_url='https://melodieapp.s3.amazonaws.com/mudfroot.JPG')

    pete = User(username='05R25', email='pete@aa.io', password='password', about="05R25", image_url='https://melodieapp.s3.amazonaws.com/pete.jpeg')

    petetwo = User(username='Search for the Infinite Light', email='sftil@aa.io', password='password', about='free jazz', image_url='https://melodieapp.s3.amazonaws.com/collinspic.jpeg')

    janedoe = User(username='Jane Doe', email='janedoe@aa.io', password='password', about="I like listening to music.", image_url='')

    jondoe = User(username='Jon Doe', email='jondoe@aa.io', password='password', about="I like listening to music.", image_url='')

    Prince = User(username='Prince', email='prince@yahoo.com',
                password='password123', about='legendary', image_url='')




    db.session.add(demo)
    db.session.add(stjohnswort)
    db.session.add(mudfroot)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
