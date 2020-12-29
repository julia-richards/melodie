from .db import db
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("userId", db.Integer, db.ForeignKey('users.id'), primary_key=True )
    db.Column("songId", db.Integer, db.ForeignKey('songs.id'), primary_key=True )
)

# class Like(db.Model):
#     __tablename__ = "likes"
#     id = db.Column(db.Integer, primary_key=True)
#     userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False,)
#     songId = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False,)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "userId": self.userId,
#             "songId": self.songId,
#         }