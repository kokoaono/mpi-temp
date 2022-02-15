const express = require('express');
// const path = require('path');

const server = express();

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

module.exports = server