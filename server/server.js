const express = require('express');
const app = express();
const cors = require('cors');

//Body parser Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
)


const itemRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

app.use('/items', itemRouter);
app.use('/fridges', fridgeRouter);

module.exports = app