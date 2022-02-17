const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('get all items')
  try {
    const items = await items.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.get('/:id', (req, res) => {
  console.log('get item by Id');
})


module.exports = router