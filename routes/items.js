const express = require('express');
const router = express.Router();
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

router.post('/', (req, res) => {
  console.log('new item posted')
});

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

router.delete('/:id', (req, res) => {
  res.send(`Delete item with ID ${req.params.id}`)
});

module.exports = router;