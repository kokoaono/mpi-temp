const express = require('express');
const app = express();
const { items } = require('../server/db/data/ItemData')

// const items = (req, res, next) => {
//   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   next()
// }

// app.use(items)

//Body parser Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// app.get('/items', (req, res) => {
//   res.header("Access-control-Allow-Origin", "*")
//   res.send(items)
// });
//
// app.post('/items', (req, res) => {
//   if (!req.body.itemName || req.body.itemName.length < 3) return res.status(400).send("Name is required and should be minumum of 3 characters")
//
//   const item = {
//     id: items.length + 1,
//     itemName: req.body.itemName,
//     itemTemp: req.body.itemTemp
//   };
//   console.log('server.js', item);
//
//   items.push(item);
//   res.send(item);
// });
//
// app.put('/items/:id', (req, res) => {
//   //find an item by its ID
//   //if not found, return 404
//   const item = items.find(item => item.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Unable to find the item');
//
//   //update an item
//   //return the updated item
//   item.itemName = req.body.itemName;
//   res.send(item);
// });
//
// app.delete('/items/:id', (req, res) => {
//   const item = items.find(item => item.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Unable to find the item to delete');
//
//   const index = items.indexOf(item);
//   items.splice(index, 1);
//   res.send(item)
// })

const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

app.use('/items', itemsRouter);
app.use('/fridges', fridgeRouter);
console.log("Started server");
module.exports = app