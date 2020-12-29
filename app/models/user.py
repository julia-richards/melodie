from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship
db = SQLAlchemy()

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("songId", db.Integer, db.ForeignKey("songs.id"))
)

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  about = db.Column(db.String(2000), nullable = True)
  image_url = db.Column(db.String(300), nullable=True)
  
  songs = db.relationship("Song", secondary=likes, back_populates="users")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "about": self.about,
      "image_url": self.image_url
    }


class Song(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(225), nullable = False)
    length = db.Column(db.Float, nullable = False)
    description = db.Column(db.String(2000))
    image_url = db.Column(db.String)
    song_url = db.Column(db.String)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    
    users = db.relationship("User", secondary=likes, back_populates="likes")

    def to_dict(self):
      return {
        "id": self.id,
        "title": self.title,
        "length": self.length,
        "description": self.description,
        "image_url": self.image_url,
        "song_url": self.song_url,
        "user": self.user_id,
        "songs":[song.to_dict() for song in self.songs]
      }