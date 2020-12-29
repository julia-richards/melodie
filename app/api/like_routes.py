from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Like, Song

@like_routes.route('/'methods=["POST"])
@login_required
def like_post():

    song = Song.query.get(id)
    # If the requested song does not exist
    if song is None:
        return 'Bad Request'

    # If the user has already liked the song
    
    # If the user has not liked the song yet
   
