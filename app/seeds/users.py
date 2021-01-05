from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', about="I enjoy the sounds of ducks quacking as I chase them. Paws make learning piano hard.", image_url='https://melodieapp.s3.amazonaws.com/A96C53FF-F4F5-4303-BBE2-C31BD2E09DBF_1_105_c.jpeg')

    stjohnswort = User(username='St. John\'s Wort', email='stjohnswort@aa.io', password='password', about="I like pretty sounds.\nPhiladelphia, PA", image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg')

    mudfroot = User(username='Mudfroot', email='mudfroot@aa.io', password='password', about="bluegrass from space", image_url='https://melodieapp.s3.amazonaws.com/mudfroot.JPG')

    rallypoint = User(username='Rally Point', email='rallypoint@aa.io', password='password', about='Rally Point is an indie-emo math rock band from Philadelphia, PA formed by non-binary composer, singer, and guitarist Anna Gentile. The band features Alyssa Almeida on cello, Jesse Fogg on bass, and Packie Cronin on drums.', image_url='https://melodieapp.s3.amazonaws.com/rallypoint.jpeg')

    pete = User(username='05R25', email='pete@aa.io', password='password', about="05R25", image_url='https://melodieapp.s3.amazonaws.com/pete.jpeg')

    petetwo = User(username='Search for the Infinite Light', email='sftil@aa.io', password='password', about='free jazz', image_url='https://melodieapp.s3.amazonaws.com/collinspic.jpeg')

    lucas = User(username='Lucas Snyder', email='lucas@aa.io', password='password', about='I\'m Lucas', image_url='https://melodieapp.s3.amazonaws.com/lucas.jpeg')

    andrew = User(username='Andrew Noseworthy', email='andrew@aa.io', password='password', about='Composer. Guitarist. Arranger.', image_url='https://melodieapp.s3.amazonaws.com/andrew.jpeg')

    tpiatw = User(username='this place is actually the worst', email='tpiatw@aa.io', password='password', about='Virtual electronic hardcore duo', image_url='https://melodieapp.s3.amazonaws.com/TPIATW.jpeg')

    janedoe = User(username='Jane Doe', email='janedoe@aa.io', password='password', about="I like listening to music.", image_url='')

    jondoe = User(username='Jon Doe', email='jondoe@aa.io', password='password', about="I like listening to music.", image_url='')

    Prince = User(username='Prince', email='prince@yahoo.com',
                password='password123', about='legendary', image_url='')


    db.session.add(demo)
    db.session.add(stjohnswort)
    db.session.add(mudfroot)
    db.session.add(rallypoint)
    db.session.add(pete)
    db.session.add(petetwo)
    db.session.add(lucas)
    db.session.add(andrew)
    db.session.add(tpiatw)
    db.session.add(janedoe)
    db.session.add(jondoe)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
