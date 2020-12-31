from sqlalchemy.orm import relationship
from .db import db
# from ..models import Song
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("userId", db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), primary_key=True),
    db.Column("songId", db.Integer, db.ForeignKey("songs.id", ondelete="CASCADE"), primary_key=True)
)

class User(db.Model, UserMixin):
  __tablename__ = 'users'
  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  about = db.Column(db.String(2000), nullable = True)
  image_url = db.Column(db.String(300), nullable=True)

  songs = db.relationship("Song", secondary=likes, back_populates="users", cascade="all")

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
      "image_url": self.image_url,
      "songs": [song.to_dict() for song in self.songs],
    }