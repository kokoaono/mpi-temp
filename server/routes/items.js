const express = require('express');
const db = require('../db/items')

const router = express.Router();


router.get('/', (req, res) => {
  db.getItems()
    .then(result => {
      res.json({ items: result.map(item => item) })
      return null
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
router.post('/', (req, res) => {
  const { name } = req.body
  const newItem = { name }
  db.addItem(newItem)
    .then(name => {
      res.status(201).json({ name })
      return null
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'failed to add item'
        }
      })
    })
});
// const newItem = {
//   itemName: req.body.name,
//   itemTemp: req.body.temperature
// }

//   if (!newItem.name || !newItem.temperature) {
//     return res.status(400).json({ message: "Please include name and temperature" })
//   }

//   items.push(newItem)
//   res.json(items)
// });

// //Individual item
// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   try {
//     const item = items.find(item => item.id === id)
//     res.status(200).json({
//       data: item
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: 'something went wrong!'
//     })
//   }
// });

// //Update item
// router.put('/:id', (req, res) => {
//   res.send(`update item with ID ${req.params.id}`)
// });

// router.delete('/:id', (req, res) => {
//   res.send(`Delete item with ID ${req.params.id}`)
// });

module.exports = router;