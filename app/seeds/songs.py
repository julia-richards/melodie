from app.models import db, Song

def seed_songs():

    nye = Song(title='What are you doing, New Year\'s Eve?', description='vibraphone, vocals - Salina\nhorns - Pat\nguitar/bass/drums/audio - Robbie', image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg', song_url='https://melodieapp.s3.amazonaws.com/NYE+mixed.wav', user_id=2)

    shadow = Song(title='Shadow Puppet', description="Emo/math-rock song featuring heavy drums, bass, guitar, electric cello, and reflective vocals. Lyrics are about the process of peeling away from a dependent relationship. Released on December 4, 2020 on the band's 2nd EP \"Transitional at Best\".", image_url='https://melodieapp.s3.amazonaws.com/TAB+COVER+OFFICIAL.jpg', song_url='https://melodieapp.s3.amazonaws.com/Rally+Point-+Shadow+Puppet+Master+103020.wav', user_id=4)

    first = Song(title='First Name', description='New track as a part of the No Funeral Records compilation 2', image_url='https://melodieapp.s3.amazonaws.com/TPIATW.jpeg', song_url='https://melodieapp.s3.amazonaws.com/TPIATW_firstname_NFcompMASTER.wav', user_id=9)

    pull = Song(title='Pull Up', description="Piece for saxophone and electronics\nAndrew Noseworthy-composer\nGreg Bruce-tenor sax", image_url='https://melodieapp.s3.amazonaws.com/People+Places+Records+1.jpg', song_url='https://melodieapp.s3.amazonaws.com/2_Noseworthy.wav', user_id=8)

    ghostsanta = Song(title='Ghost Santa', description="A holiday-themed parody of \"Ghost Riders in the Sky\" that follows the horrific tale of Ghost Santa.\n\nEric - acoustic guitar, banjo, vocals, lyrics\nRobbie - electric guitar, bass, piano, mandolin, drums, jingle bells, cigar box made by Mark, cheese\n\nCover art cross-stitched by Christina", image_url='https://melodieapp.s3.amazonaws.com/frootcake+album+art.JPG', song_url='https://melodieapp.s3.amazonaws.com/Ghost+Santa+FINAL.wav', user_id=3)

    kai = Song(title='Kai Winn', description='Deep Space Nine is the best show. S1 Finale.', image_url='https://melodieapp.s3.amazonaws.com/lucas.jpeg', song_url='https://melodieapp.s3.amazonaws.com/Kai+Winn.wav', user_id=7)

    micro = Song(title='Microlocking II', description='Piece for solo electric guitar.\nSaman Shahi-composer\nAndrew Noseworthy-electric guitar', image_url='https://melodieapp.s3.amazonaws.com/030.jpg', song_url='https://melodieapp.s3.amazonaws.com/MicrolockingII_MASTER2.wav', user_id=8)

    heavy = Song(title='Heavy Weight Champ', description="Indie-emo, sad power ballad featuring acoustic guitar and emotional cello arrangement, which builds into a heavy, nostalgic ending featuring drums, bass, guitar, electric cello, and powerful vocals. Lyrics are about grieving and loss. Released on December 4, 2020 on the band's 2nd EP \"Transitional at Best\".", image_url='https://melodieapp.s3.amazonaws.com/TAB+COVER+OFFICIAL.jpg', song_url='https://melodieapp.s3.amazonaws.com/Rally+Point-+Heavy+Weight+Champ+Master+103020.wav', user_id=4)

    prettygirl = Song(title='pretty girl', description="pretty girl by clairo\n\nvibraphone/drums/vocals/mixing - Salina", image_url='https://melodieapp.s3.amazonaws.com/salinavibe.jpeg', song_url='https://melodieapp.s3.amazonaws.com/pretty+girl.wav', user_id=2)

    dude = Song(title='dude climax lamo oui', description='i watched the Gaspar Noe film Climax and liked it a bunch', image_url='https://melodieapp.s3.amazonaws.com/pete.jpeg', song_url='https://melodieapp.s3.amazonaws.com/dude+climax+lamo+oui++-+11_30_20%2C+8.07+PM.mp3', user_id=5)

    thankyou = Song(title='Thank You (You\'re Welcome)', description="Emo/math-rock song featuring upbeat drums, bass, guitar, roaring electric cello, and intense vocals. Lyrics are about finding meaning through others in an attempt to anchor yourself down/learning to develop a stronger sense of self. Released on December 4, 2020 on the band's 2nd EP \"Transitional at Best\".", image_url='https://melodieapp.s3.amazonaws.com/TAB+COVER+OFFICIAL.jpg', song_url='https://melodieapp.s3.amazonaws.com/Rally+Point-+Thank+You+Master+103020.wav', user_id=4)

    sweetsilverbells = Song(title='Sweet Silver Bells', description="A semi-experimental holiday piece. Can you figure out what the crackly voice is saying to you?\n\nRobbie - acoustic guitar, vocals, drums, synth\nCover art cross-stitched by Christina", image_url='https://melodieapp.s3.amazonaws.com/frootcake+album+art.JPG', song_url='https://melodieapp.s3.amazonaws.com/Sweet+silver+bells+FINAL.wav', user_id=3)

    softly = Song(title='Softly', description="clairo cover\nvocals - Yaz Lancaster", image_url='https://melodieapp.s3.amazonaws.com/People+Places+Records+1.jpg', song_url='https://melodieapp.s3.amazonaws.com/softlyMASTER.wav', user_id=8)

    # collins = Song(title='ID RATHER BE+U', description='Bootsy Collins cover', image_url='https://melodieapp.s3.amazonaws.com/collinspic.jpeg', user_id='6')


    db.session.add(nye)
    db.session.add(shadow)
    db.session.add(first)
    db.session.add(pull)
    db.session.add(ghostsanta)
    db.session.add(kai)
    db.session.add(micro)
    db.session.add(heavy)
    db.session.add(dude)
    db.session.add(prettygirl)
    db.session.add(thankyou)
    db.session.add(sweetsilverbells)
    db.session.add(softly)
    # db.session.add(collins)

    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs;')
    db.session.commit()
