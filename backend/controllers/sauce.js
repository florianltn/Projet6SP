const sauce = require('../models/sauce');
const Sauce = require('../models/sauce');

exports.createSauce = (req, res, next) => {
    const sauceName = req.body.Sauce
    const sauce = new Sauce ({
        ...sauceName,
       //image = req.body.image
    }); 
    sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce créée!' }))
    .catch(error => res.status(400).json({ error }));
};

exports.like = (req, res, next) => {
    
}

exports.getAllSauce = (req, res, next) => {
    sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }))
    console.log(sauces)
};

exports.getOneSauce = (req, res, next) => {
    sauce.findOne()
    .then(sauces => res.status(200).json(sauce))
    .catch(error => res.status(400).json({ error }))
};

exports.modifyOne = (req, res, next) => {

}

exports.deleteOne = (req, res, next) => {

}


