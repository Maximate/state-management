'use strict';
const express = require('express');
const app = express();
const port = 3000;
const username = 'foo';
const password = 'bar';

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/setCookie', function(req, res){
  res.cookie('color', 'red').send('cookie set');
});

app.get('/deleteCookie', function(req, res){
  res.clearCookie('color');
  res.send('cookie cleared');
});

app.get('/form', (req, res) => {
  res.render('views/form.pug');
});

app.get('/secret', (req, res) => {
  res.render('views/secret.pug');
});

app.post('/login', (req, res) => {
  res.render('');
});