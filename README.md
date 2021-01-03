<h1 align="center"> melodie
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

## User Authenication

Users can securely create an account using our login and logout feature. melodie uses hash passwords so that no plain text passwords are ever stored in the database. melodie also uses various middleware functions when processing request and responses so that we know a user is who they say they are. Certain routes also require user authenication for pages to be accessed. [Please check it out](https://github.com/julia-richards/melodie/blob/main/app/api/auth_routes.py)

melodie's signup and login forms have input validations to enforce clean data submission and protect the integrity of the data submitted.

## Song Feed
 
 melodie entire purpose is to allow users to share their songs. Each song has a title, description and a cover image attached to it.
 Users are able to add/remove and like these songs. [CHECK IT OUT](https://github.com/julia-richards/melodie/blob/main/app/api/song_routes.py)

## Database Schema
![IMG_1019](https://user-images.githubusercontent.com/69014609/103426682-3531f000-4b89-11eb-9ef4-f9a1743b70b5.PNG)
