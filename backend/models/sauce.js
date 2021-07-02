const mongoose = require('mongoose'); 

const sauceSchema = mongoose.Schema({
    name : {type: String, required : true},
    imageUrl : {type: String, required : true},
});

module.exports = mongoose.model('Sauce', sauceSchema);