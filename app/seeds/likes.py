# from app.models import db, likes, User, Song

# def seed_likes():

#     like1 = likes(userId = 1, songId = 1)
#     like2 = likes(userId = 2, songId = 1)
#     like3 = likes(userId = 3, songId = 1)

#     db.session.add(like1)
#     db.session.add(like2)
#     db.session.add(like3)

#     db.session.commit()

# def undo_likes():
#     db.session.execute('TRUNCATE ... CASCADE likes')
#     db.session.commit()
