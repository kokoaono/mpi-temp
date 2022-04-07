const express = require('express');
const db = require('../db/fridges');

const router = express.Router();

//get all fridge data
router.get('/', (req, res) => {
  db.getFridgeData()
    .then(result => {
      res.json({ Fridges: result })
      return null;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'Oops something went wrong'
        }
      })
    })
});

//ADD fridge
router.post('/', (req, res) => {
  const { fridgeName, fridgeTemp, created_at, updated_at } = req.body;
  const newFridge = { fridgeName, fridgeTemp, created_at, updated_at };
  db.addFridge(newFridge)
    .then(data => {
      res.status(200).json({ data })
      return null;
    })
    .catch(() => {
      res.status(404).json({
        error: {
          msg: 'something went wrong'
        }
      })
    })
});

//delete by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.deleteFridge(id)
    .then(() => {
      res.status(200).json('Successfully deleted the fridge')
    })
    .catch(() => {
      res.status(500).json({
        error: {
          msg: 'something went wrong!.'
        }
      })
    })
});

module.exports = router;