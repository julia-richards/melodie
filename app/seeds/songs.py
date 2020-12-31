from app.models import db, Song

def seed_songs():

    sample = Song(title='New Years Eve', description='', image_url='https://melodieapp.s3.amazonaws.com/Untitled_Artwork.jpg', song_url='https://melodieapp.s3.amazonaws.com/NYE+mixed.wav', user_id=1)

    db.session.add(sample)

    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs;')
    db.session.commit()
