const express = require('express');
const app = express();

//Body parser Middleware
app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

const itemsRouter = require('./routes/items');
// const fridgeRouter = require('./routes/fridges');

app.use('/items', itemsRouter);
// app.use('/fridges', fridgeRouter);

module.exports = app