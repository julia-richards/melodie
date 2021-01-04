from flask import Blueprint, jsonify, redirect, request, Flask, render_template, send_file
from flask_login import login_required, current_user
from app.models import db, Song, User
from app.s3 import upload_file
from app.forms.song_form import SongForm

song_routes = Blueprint('songs', __name__)

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
                    description=form.data['description'],
                    image_url=form.data['image_url'],
                    song_url=form.data['song_url'],
                    user_id=current_user.id
                )
        db.session.add(song)
        db.session.commit()
        return song.to_dict()
    return {'errors': form.errors}, 422


@song_routes.route('/<int:id>', methods=["GET", "POST", "DELETE"])
@login_required
def update_song(id):
    song = Song.query.get(id)
    if request.method == 'GET':
        res = song.to_dict()
        res['likedByUser'] = current_user in song.users
        return res
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if request.method == 'DELETE':
        db.session.delete(song)
        db.session.commit()
        return {'message': 'Song has been deleted'}
    if song.user_id == current_user.id:
        if form.validate_on_submit():
            song = Song(
                title=form.data['title'],
                description=form.data['description'],
                image_url=form.data['image_url'],
                song_url=form.data['song_url'],
                user_id=current_user.id
            )
            db.session.add(song)
            db.session.commit()
            return song.to_dict()
        return {'errors': form.errors}, 422
    return {'errors': 'Only the artist can delete this song'}, 401

@song_routes.route('/edit/<int:id>', methods=['PATCH'])
# @login_required
def edit_song(id):
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if request.files:
            file = request.files.get('file')
            url = upload_file(file)
            return {'url': url}
        song = Song.query.get(id)
        # if song.user_id == current_user.id:
        data = request.json
        print(data)
        if form.data['title']:
            song.title = data['title']
        if form.data['description']:
            song.description = data['description']
        if form.data['image_url']:
            song.image_url = data['image_url']
        if form.data['song_url']:
            song.song_url = data['song_url']
        db.session.commit()
        return song.to_dict()
        # return {'errors': 'Only the artist can edit this song'}, 401
    return {'errors': form.errors}, 422

@song_routes.route("/upload", methods=['POST', 'PATCH'])
@login_required
def upload():
    if request.method == "POST":
        file = request.files.get('file')
        url = upload_file(file)

        return {'url': url}
    if request.method == "PATCH":
        file = request.files.get('file')
        url = upload_file(file)

        return {'url': url}

@song_routes.route('/<int:id>/likes', methods=["POST"])
@login_required
def likeSong(id):
    song = Song.query.get(id)
    user = User.query.get(current_user.get_id())
    likingUserIds = {u.id:True for u in song.users }
    if user.id not in likingUserIds:
        song.users.append(user)
        db.session.commit()
        return jsonify({"addedLike":True})
    else:
        song.users.remove(user)
        db.session.commit()
        return jsonify({"removedLike":True})

@song_routes.route('/users/<int:user_id>/')
@login_required
def usersSongs(user_id):
    songs = Song.query.filter_by(user_id)
    return {"songs": [song.to_dict() for song in songs]}
