const Plant = require('../models/plant');

module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    deletePlant,
    updatePlant
};
  
function updatePlant(req, res) {
    Plant.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(plant) {
        res.status(200).json(plant);
    });
}

function deletePlant(req, res) {
    Plant.findByIdAndRemove(req.params.id).then(function(plant) {
        res.status(200).json(plant);
    });
}

function getOnePlant(req, res) {
    Plant.findById(req.params.id).then(function(plant) {
        res.status(200).json(plant);
    });
}

function createPlant(req, res) {
    Plant.create(req.body).then(function(plant) {
        res.status(201).json(plant);
    });
}

function getAllPlants(req, res) {
    Plant.find({}).then(function(plants) {
        console.log(plants);
        res.status(200).json(plants);
    });
}