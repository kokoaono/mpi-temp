const express = require('express');
const router = express.Router();
// const db = require('../db/items');
const items = require('../dummyData');

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      data: items
    })
  } catch (err) {
    res.status(400).json({
      message: 'error occured'
    });
  }
});

// Create item
router.post('/', (req, res) => {
  const newItem = {
    id: Math.floor(Math.random() * 100),
    itemName: req.body.name,
    itemTemp: req.body.temperature
  }

  if (!newItem.name || !newItem.temperature) {
    return res.status(400).json({ message: "Please include name and temperature" })
  }

  items.push(newItem)
  res.json(items)
});

//Individual item
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  try {
    const item = items.find(item => item.id === id)
    res.status(200).json({
      data: item
    });
  } catch (err) {
    res.status(400).json({
      message: 'something went wrong!'
    })
  }
});

//Update item
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  try {
    const found = items.find(item => item.id === id);
    if (found) {
      const updateItem = req.body;
    }
  } catch (err) {
    res.status(400).json({
      message: 'something went wrong!'
    })
  }
});

router.delete('/:id', (req, res) => {
  res.send(`Delete item with ID ${req.params.id}`)
});

module.exports = router;