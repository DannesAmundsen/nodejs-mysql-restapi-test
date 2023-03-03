const {pool} = require("../db/connection_db")

const root = (req, res) => {
    res.send("Hello!");
  }

const ping = async (req, res) => {
    const result = await pool.query(`SELECT "pong" as result`);
    res.send(result[0][0]);
  }

module.exports = {root, ping}