from flask import Blueprint, jsonify, redirect, request, Flask, render_template, send_file
from flask_login import login_required, current_user
from app.models import db, Song, User
from app.s3 import upload_file
from app.forms.song_form import SongForm


song_routes = Blueprint('songs', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@song_routes.route('/')
def songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}


@song_routes.route('/', methods=["POST"])
@login_required
def add_song():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        song = Song(
                    title=form.data['title'],
                    length=form.data['length'],
                    description=form.data['description'],
                    image_url=form.data['image_url'],
                    song_url=form.data['song_url'],
                    user_id=current_user.id
                )
        db.session.add(song)
        db.session.commit()
        return song.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@song_routes.route('/<int:id>', methods=["POST", "DELETE"])
@login_required
def update_song(id):
    song = Song.query.get(id)
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if request.method == 'DELETE':
        db.session.delete(song)
        db.session.commit()
    if song.user_id == current_user.id:
        if form.validate_on_submit():
            song = Song(
                title=form.data['title'],
                length=form.data['length'],
                description=form.data['description'],
                image_url=form.data['image_url'],
                song_url=form.data['song_url'],
                user_id=current_user.id
            )
            db.session.add(song)
            db.session.commit()
            return song.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}
    return {'errors': 'Only the artist can delete this song'}


@song_routes.route("/upload", methods=['POST'])
@login_required
def upload():
    if request.method == "POST":
        file = request.files.get('file')
        url = upload_file(file)

        return {'url': url}
