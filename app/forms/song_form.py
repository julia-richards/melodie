from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class SongForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    length = DecimalField('length', validators=[DataRequired()])
    description = TextAreaField('description')
    image_url = StringField('song_image')
    song_url = StringField('song_url', validators=[DataRequired()])
