from .db import db
from ..models.user import likes, User
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class Song(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(225), nullable = False)
    description = db.Column(db.String(2000))
    image_url = db.Column(db.String)
    song_url = db.Column(db.String)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)

    users = db.relationship("User", secondary=likes, back_populates="songs")

    def to_dict(self):
        return {
          "id": self.id,
          "title": self.title,
          "description": self.description,
          "image_url": self.image_url,
          "song_url": self.song_url,
          "user": self.user_id,
          "likesCount": len(self.users)
        }
