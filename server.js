const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.PORT || 5000


// server.use(express.static('public'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
// server.use(express.urlencoded({ extended: true }))

const itemsRouter = require('./routes/items');
const fridgeRouter = require('./routes/fridges');

server.get('/', (req, res) => {
  res.send('hello')
  console.log('hello');
})

server.use('/items', itemsRouter);
server.use('/fridges', fridgeRouter);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = server