const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connect = require('connect');
var app = express();
const userModels = require('./models/user');
const userRoutes = require('./routes/user');

//connexion a mongodb
mongoose.connect('mongodb+srv://florianltn:mongo60!@cluster0.48owc.mongodb.net/cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//routes 
app.use(bodyParser.json());
app.use('/api/auth', userRoutes);


