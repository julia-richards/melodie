from app.models import db, Song

def seed_songs():

    sample = Song(title='What are you doing, New Year\'s Eve?', description='vibraphone, vocals - Salina\nhorns - Pat\nguitar/bass/drums/audio - Robbie', image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg', song_url='https://melodieapp.s3.amazonaws.com/NYE+mixed.wav', user_id=2)

    prettygirl = Song(title='pretty girl', description='pretty girl by clairo\nvibraphone/drums/vocals/mixing - Salina', image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg', song_url='https://melodieapp.s3.amazonaws.com/pretty+girl.wav', user_id=2)

    ghostsanta = Song(title='Ghost Santa', description='A holiday-themed parody of "Ghost Riders in the Sky" that follows the horrific tale of Ghost Santa.\nEric - acoustic guitar, banjo, vocals, lyrics\nRobbie - electric guitar, bass, piano, mandolin, drums, jingle bells, cigar box made by Mark, cheese\nCover art cross-stitched by Christina', image_url='https://melodieapp.s3.amazonaws.com/frootcake+album+art.JPG', user_id=3)

    sweetsilverbells = Song(title='Sweet Silver Bells', description='A semi-experimental hoilday piece. Can you figure out what the crackly voice is saying to you?\nRobbie - acoustic guitar, vocals, drums, synth\nCover art cross-stitched by Christina', image_url='https://melodieapp.s3.amazonaws.com/frootcake+album+art.JPG', user_id=3)

    db.session.add(sample)

    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs;')
    db.session.commit()
