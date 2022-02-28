// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'server/db/dev.sqlite3'),
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds')
    },
    migrations: {
      directory: path.join(__dirname, 'server/db/migrations')
    },
    useNullAsDefault: true
  },
};
