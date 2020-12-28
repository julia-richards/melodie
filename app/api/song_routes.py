from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Song, User

song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}

@song_routes.route('/<int:id>', methods=["POST", "DELETE"])
@login_required
def update_song(id):
    song = Song.query.get(id)
    if song.user_id == current_user.id:
        song = Song(
            #get data from form
        )
        db.session.add(song)
        db.session.commit()
        return 'Success' #TODO:change me
    return {'errors': 'User does not match creator'}
