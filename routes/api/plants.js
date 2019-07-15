const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/plants');

/* GET /api/posts */
router.get('/', plantsCtrl.getAllPlants);
router.get('/:id', plantsCtrl.getOnePlant);
router.use(require('../../config/auth'));
router.post('/', plantsCtrl.createPlant);
router.delete('/:id', plantsCtrl.deletePlant);
router.put('/:id', plantsCtrl.updatePlant);
router.put('/:id/increaseWater', plantsCtrl.increaseWater);
router.put('/:id/decreaseWater', plantsCtrl.decreaseWater);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;