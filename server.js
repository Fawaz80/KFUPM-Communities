//Importing modules
const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const { mongoose } = require('./db.js');

//import the routers
const userRoutes = require('./api/user');
const communityRoutes = require('./api/community');
const eventRoutes = require('./api/event');
const materialRoutes = require('./api/material');
const postRoutes = require('./api/post');

//Set up express
const app = express();
app.use(express.static('public'));

//configure the njk
nunjucks.configure('views', {
  express: app,
});
app.set('view engine', 'njk');

//configure session
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }),
);

//below render all of ngk's pages
app.get('/home', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('home', { navUsername: navUsername });
});

app.get('/community', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('community', { navUsername: navUsername });
});

app.get('/event', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('event', { navUsername: navUsername });
});

app.get('/profile', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('profile', { navUsername: navUsername });
});

app.get('/material', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('material', { navUsername: navUsername });
});

app.get('/settings', (req, res) => {
  res.render('settings', {});
});
app.get('/login', (req, res) => {
  req.session.loggedIn = false;
  res.render('login', {});
});
app.get('/signup', (req, res) => {
  res.render('signup', {});
});

app.get('/searchedCommunity', (req, res) => {
  const navUsername = req.session.loggedIn ? req.session.username : 'Guest';
  res.render('searchedCommunity', { navUsername: navUsername });
});

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//this will use all routes in api folder
app.use('/', userRoutes);
app.use('/', communityRoutes);
app.use('/', eventRoutes);
app.use('/', materialRoutes);
app.use('/', postRoutes);

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
