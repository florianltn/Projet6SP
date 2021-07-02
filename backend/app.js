const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

//connexion a mongodb
mongoose.connect('mongodb+srv://florianltn:mongo60!@cluster0.48owc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//routes 
app.use(bodyParser.json());
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);


module.exports = app;