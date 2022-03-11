const express = require('express');
const path = require('path');

const server = express()


//Body parser Middleware
server.use(express.static(path.join(__dirname, './../public')));
server.use(express.json());
// server.use(express.urlencoded({ extended: false }))

const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

server.use('/items', itemsRouter);
server.use('/fridges', fridgeRouter);

module.exports = server