const { Pool } = require("pg");

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "university",
};

const pool = new Pool(config);

module.exports = pool;