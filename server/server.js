const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

server.use('/items', itemsRouter);
server.use('/fridges', fridgeRouter);

module.exports = server