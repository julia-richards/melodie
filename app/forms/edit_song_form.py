from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class EditSongForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description')
    image_url = StringField('song_image')
    song_url = StringField('song_url', validators=[DataRequired()])
