const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/plants');

/* GET /api/posts */
router.get('/plants', plantsCtrl.getAllPlants);
router.get('/plants/:id', plantsCtrl.getOnePlant);
router.post('/plants', plantsCtrl.createPlant);
router.delete('/plants/:id', plantsCtrl.deletePlant);
router.put('/plants/:id', plantsCtrl.updatePlant);

module.exports = router;