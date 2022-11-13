const path = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, "src", "database", "database.db")
    },
    
    migrations: {
      directory: path.join(__dirname, "src", "database", "knex", "migrations")
    },

    useNullAsDefault: true

  }
};