const express = require('express');
const db = require('../db/items');

const router = express.Router();

// Get all items
router.get('/', (req, res) => {
  db.getItems()
    .then(result => {
      res.json({ items: result.map(item => item) })
      return;
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'failed to get Items'
        }
      })
    })
});

//Add Item
// router.post('/items', (req, res) => {
//   const { itemName } = req.body.itemName
//   const newItem = { itemName }
//   console.log("newItem", newItem);

//   db.addItem(newItem)
//     .then(item => {
//       res.status(201).json({ item })
//       return null
//     })
//     .catch(() => {
//       res.status(404).json({
//         error: {
//           title: 'failed to add item'
//         }
//       })
//     })
// });

//Delete an item 
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  db.deleteItem(id)
    .then(() => {
      res.status(202).json('Item successfully deleted!')
      return null
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'something went wrong!'
        }
      })
    })
});

//Individual item
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  db.getItemById(id)
    .then(itemData => {
      res.status(200).json({ itemData })

      if (!id) res.status(404).send(`unable to find item with ID of ${id}`)

    })
});

// //Update item
// router.put('/:id', (req, res) => {
//   res.send(`update item with ID ${req.params.id}`)
// });



module.exports = router;