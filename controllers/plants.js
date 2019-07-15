const Plant = require('../models/plant');
const User = require('../models/user');

module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    deletePlant,
    updatePlant,
    increaseWater,
    decreaseWater
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
   User.findById(req.user._id).exec(function(err, user) {
       console.log(user);
       Plant.create(req.body, function(err, plant) {
           plant.userId = user._id;
           user.plants.push(plant._id);
           plant.save();
           console.log(plant);
           user.save();
           res.status(200).json(plant);
        })
   })
}

function getAllPlants(req, res) {
    // User.findById(req.user._id).then(function(err, user){
    //     console.log(user)
        Plant.find().then(function(plants) {
            console.log(plants);
            res.status(200).json(plants);
        });
    // })
}

function increaseWater(req, res) {
    Plant.findById(req.params.id).then(function(plant) {
        plant.waterSum += 8;
        if (plant.waterSum >= 50 && plant.waterSum <= 53) {
            plant.growth += 1;
        } else if (plant.waterSum > 53) {
            plant.growth -= 1;
        }
        plant.save(function(plant) {
            res.status(200).json(plant);
        })
    })
}

function decreaseWater(req, res) {
    Plant.findById(req.params.id).then(function(plant) {
        plant.waterSum -= 3;
        if (plant.waterSum >= 50 && plant.waterSum <= 53) {
            plant.growth += 1;
        } else if (plant.waterSum > 53) {
            plant.growth -= 1;
        }
        plant.save(function(plant) {
            res.status(200).json(plant);
        })
    })
}