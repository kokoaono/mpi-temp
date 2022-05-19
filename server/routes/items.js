const express = require('express');
const db = require('../db/items');

const router = express.Router();

// Get all items
router.get('/', (req, res) => {
  db.getItems()
    .then(result => {
      res.json({ items: result.map(item => item) })
      return null;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'failed to get Items'
        }
      })
    })
});

//Add Item
router.post('/', (req, res) => {
  const { item_name, item_temp } = req.body;
  const newItem = { item_temp, item_name };
  db.addItem(newItem)
    .then(data => {
      res.status(200).json({ data })
      return null;
    })
    .catch(() => {
      res.status(404).json({
        error: {
          msg: 'Bad request'
        }
      })
    })
});

//Delete an item 
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.deleteItem(id)
    .then(() => {
      res.status(202).json('Item successfully deleted!')
      return null;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'something went wrong!'
        }
      })
    })
});

//Individual item
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.getItemById(id)
    .then(itemData => {
      res.status(200).json({ itemData })
      return null;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'something went wrong'
        }
      })
    })
});

//Update item
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { item_name, item_temp } = req.body
  const updatedItem = { item_name, item_temp, id }
  db.updateItem(updatedItem)
    .then(data => {
      res.status(200).json({ data })
      return null;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'something is not right'
        }
      })
    })
});



module.exports = router;