const config = require(config.json);
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

inialize();

async function initialize(){
    const {host, port, username, password, database} = config.database;
    const conn = await mysql.createConnection({host, port, username, password})
}
