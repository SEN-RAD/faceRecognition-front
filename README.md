# faceRecognition-front

This app was built as the final project during the course Complete Web Developer by Andrei Neagoie.  

### Idea and Functionality

The app uses face recognition AI  (www.clarifai.com/use-cases/facial-recognition). Users register and sign-in to use the app, copy-paste a link to an image, and the app detects the faces in the picture and keeps count of how many pictures the user has uploaded. 

Want to test it?

1. Register (it doesn't have to be real information).
2. Sign-in using the same user and password.
3. Paste a link to an image of a face (the link must end as image extension, e.g. .jpg) and click on Detect Face.

### Lessons Learned

* How to build and deploy a full-stack application using React, Node, and PSQL.
* How to read API documentation and follow instructions to integrate an AI pre-built model.
* How to use bcrypt and environment variables to hide sensitive information (e.g. passwords).
* How to use npm packages for styling (e.g. tachyons, particles). 

### Room for Improvement

At the moment, if the user uploads an image of a group, the app is only able to recognize one face. This needs to be changed, so it can recognize all the faces in the photo. 
