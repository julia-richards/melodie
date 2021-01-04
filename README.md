<h1 align="center"> melodie
<br>
<img width="375" alt="1" src="https://user-images.githubusercontent.com/63379814/103493053-1fc4fc00-4dfd-11eb-86f4-c4bafca57487.png">
<br>
  melodie Documentation
</h1>

<div align="center">
  <sub>Built by
  <a href="https://github.com/julia-richards">Julia Richards</a>, 
  <a href="https://github.com/sal-wav">Salina Kuo</a> and
  <a href="https://github.com/monajain99">Rashmi Jain</a>
</div>
A live version of our application can be found [here](https://melodie.herokuapp.com/)

<h4 align="center">melodie is where any one can share their music or listen to others' uploads.
Heavily inspired by SoundCloud, users can browse a home feed, search for songs, view user pages, view song pages, like songs, upload, edit songs and listen to content. Deployed within one week of coding, melodie utilizes React, Flask, and PostgreSQL. </h4>
<h1 align="center">
  <a name="logo" href="https://melodie.herokuapp.com/"><img src="https://i.ibb.co/wMYVZYS/icons8-javascript-96.png" alt="js-logo" width="50"></a>
  <a name="logo" href="https://melodie.herokuapp.com/"><img src="https://i.ibb.co/xMxSMkw/icons8-pug-96.png" alt="pug-logo" width="50"></a>
  <a name="logo" href="https://melodie.herokuapp.com/"><img src="https://i.ibb.co/VLYp5m1/icons8-css3-96.png" alt="css-logo" width="50"></a>
  <a name="logo" href="https://melodie.herokuapp.com/https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png"><img src="https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png" alt="psql-logo" width="50"></a>
</h1>

![](https://img.shields.io/badge/Tools-Nodemon-informational?style=flat&logo=Nodemon&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Node.js-informational?style=flat&logo=Node.js&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=Postman&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=ff0000) ![](https://img.shields.io/badge/Code-HTML-informational?style=flat&logo=HTML5&logoColor=white&color=ff0000) ![](https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=CSS3&logoColor=white&color=ff0000) 
 ![](https://img.shields.io/badge/Tools-npm-informational?style=flat&logo=NPM&logoColor=white&color=ff8300)


## Overview

melodie is where any one can share their music or listen to others' uploads.
Heavily inspired by SoundCloud, users can browse a home feed, search for songs, view user pages, view song pages, like songs, upload, edit songs and listen to content. Deployed within one week of coding, melodie utilizes React, Flask, and PostgreSQL. 

<br>

<h1 align="center">
  Features
</h1>

### User Authenication

Users can securely create an account using our login and logout feature. melodie uses hash passwords so that no plain text passwords are ever stored in the database. melodie also uses various middleware functions when processing request and responses so that we know a user is who they say they are. Certain routes also require user authenication for pages to be accessed. [Please check it out](https://github.com/julia-richards/melodie/blob/main/app/api/auth_routes.py)

melodie's signup and login forms have input validations to enforce clean data submission and protect the integrity of the data submitted.

### User API
![signup API](https://user-images.githubusercontent.com/63379814/103491576-0323c680-4df3-11eb-9bef-e98acd5f81e1.png)

### Song API

![Song API](https://user-images.githubusercontent.com/63379814/103491750-429ee280-4df4-11eb-9828-bbffcc9946b5.png)

![Song AWS upload](https://user-images.githubusercontent.com/63379814/103491754-47639680-4df4-11eb-9362-8385b0dee802.png)

### Like API

![Likes API](https://user-images.githubusercontent.com/63379814/103491748-3dda2e80-4df4-11eb-93d4-8ccdd113a8b1.png)

### Database Schema
![IMG_1019](https://user-images.githubusercontent.com/69014609/103426682-3531f000-4b89-11eb-9ef4-f9a1743b70b5.PNG)


## Pages
### Splash Page
### Login (Demo)
### Signup

### Song Feed

Feed of new songs and artists.
 
### Audio Player

When you click on a song you can play it using the custom audio player.

### Upload Song

This is the form to create a new song   

### Edit Song

This is where you're taken after the song is uploaded or you manually select to edit a song

### Search

## Usage
### Development

Want to contribute?

To fix a bug or add a feature, follow these steps:

-   Fork the repository
-   Create a new branch with `git checkout -b feature-branch-name`
-   Make appropriate changes to the files and push back to github
-   Create a Pull Request
    -   Use a clear and descriptive title for the issue to identify the suggestion.
    -   Include any relevant issue numbers in the PR body, not the title.
    -   Provide a comprehensive description of all changes made.

#### Setting Up and Starting a Local Server

1. Download code and pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt. 
2. cd /melodie/react-app and `npm install` to install all node dependencies
3. Create a **.env** file based on the example with proper settings for your development environment and setup your PostgreSQL user, password and database and make sure it matches your **.env** file
    - Duplicate the `.env.example` for the `.env` file.
    - Update the following variables:
        - `FLASK_APP` to app
        - `FLASK_ENV` to dev
        - `SECRET_KEY` 
        - `DATABASE_URL` 
3. Get into your pipenv, migrate your database, seed your database, and run your flask app
    - Run `pipenv shell`
    - Run `flask db upgrade`
    - Run `flask seed all`
    - Run `flask run`
4. Start server by running `npm start` in the root project directory
5. The server will start on `http://localhost:3000`
