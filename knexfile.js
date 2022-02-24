// Update with your config settings.
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    }
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: ':memory:'
  },

  migrations: {
    directory: path.join(__dirname, '/db/migrations')
  },

  seeds: {
    directory: path.join(__dirname, '/db/seeds')
  },
};
