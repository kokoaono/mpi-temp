const express = require('express');
const path = require('path');

const server = express()


//Body parser Middleware
server.use(express.static(path.join(__dirname, './../public')));
server.use(express.json());
// server.use(express.urlencoded({ extended: false }))
server.get('/items', (req, res) => {
  res.header("Access-control-Allow-Origin", "*")
  res.send('hello world')
})

const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

server.use('/items', itemsRouter);
server.use('/fridges', fridgeRouter);

module.exports = server