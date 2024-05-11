# KFUPM-Communities
Dear dev,
Please note the following when you start working:
1. It is recommended to use bootstrap in order to simplify the process, and have cleaner and nicer elements.
2. Refer to the figma file whenever you are lost, and approximate the distances and sizes as you see fit.
3. If something is not clear, contact me via WhatsApp.
4. When you start working make sure you are working on your part only, as some elements are shared through many pages but only need to be created once (such is the navbar).
5. We will be working to finish the desktop website front end, as for the mobile website it is to be done later.

Dear dev, 
Please note the following before you start working:
1. you need to first setup the database, download mongodb compass, and mongodb server from the official website, and set the URI in mongodb to be "mongodb://localhost:27017". I uploaded a JSON file named db-user.json it has a few users that you can import to your database.
2. after you finish the database, start working the modules, modules you will need include: express, mongodb, mongoose, bcrypt, express-session, nunjucks. that is all i can recall for now.

after you finish the modules, please understand the structure we are following, as we have 5 folders in the main directory and 2 files:
a. db.js: this file connects to the database and that is it.
b. models: this folder is responsible for the schemas, it can also be used for validation. check the user.js file inside this folder, you can see how it specifies the min and max length of the username and other restrictions.
c. controller: this folder has functions, such as signUp(), logIn(), and other CRUD (create, read, update, delete) operations. it also imports the user models created in the user.js inside models folder.
d. api: this folder is called api, we can also call it routes. it is responsible for routing, or in other words it connects the server.js to the controller. notice every route inside any file in this folder calls a function that is made in controller folder.
e. public: this file has the styles and images folders inside of it, as well as static html files, but in our case all of our files are dynamic. so no html files. 
f. views: this file serves dynamic files, notice all html files we did in phase 1 are now njk files in this folder.
g. server.js: this file starts up the website and calls for actions that will be executed in the controller.



These are all the notes for now.
