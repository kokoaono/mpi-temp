const server = require('./server')

const PORT = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('hello')
})

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});