const express = require('express');
const router = express.Router();
const fridges = require('../../dummyFridgeData');

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      data: fridges
    })
  } catch (err) {
    res.status(400).json({
      message: 'error occured'
    });
  }
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  try {
    const fridge = fridges.find(fridge => fridge.id === id)
    res.status(200).json({
      data: fridge
    })
  } catch (err) {
    res.status(400).json({
      message: `could not get ID of ${id}`
    })
  }
});

module.exports = router;