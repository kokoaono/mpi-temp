const express = require('express');
const server = express();
// const path = require('path');
const PORT = process.env.PORT || 5000


// server.use(express.static(path.join(__dirname, 'src')))
server.use(express.json())

server.get('/', (req, res) => {
  res.send('hello you')
})

const itemsRouter = require('./routes/items');

server.use('/items', itemsRouter);


server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});


module.exports = server