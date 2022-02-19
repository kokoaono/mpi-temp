const express = require('express');
const server = express();
// const path = require('path');
const PORT = process.env.PORT || 5000


server.use(express.static('public'))
// server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())


const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');


server.use('/items', itemsRouter);
server.use('/fridge', fridgeRouter);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = server