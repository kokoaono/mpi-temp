const express = require('express');
const server = express();

const PORT = process.env.PORT || 5000

server.use(express.json())

const itemsRouter = require('./Routes/items')

server.use('/items', itemsRouter)


server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});