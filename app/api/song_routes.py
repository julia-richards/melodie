from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Song, User
# from auth_routes import validation_errors_to_error_messages
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

# @bp.route('/photo/<int:id>', methods=["GET"])
# def get_one_photo(id):
#     photo = Photo.query.options(joinedload('comments')).get(id)
#     comments = [comment.to_dict() for comment in photo.comments]
#     photo = photo.to_dict()
#     payload = {'photo': photo, 'comments': comments}
#     return payload

@song_routes.route('/')
def songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}

@song_routes.route('/song/<int:id>', methods=['GET'])
def one_song(id):
    # one_song = Song.query.get(id)
    one_song = Song.query.options(joinedLoad('users')).get(id)
    # song_user = one_song.users
    # user = song_user.to_dict()
    song = one_song.to_dict()
    return {"song": song}


@song_routes.route('/', methods=["POST"])
@login_required
def add_song():
    form = SongForm()
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
