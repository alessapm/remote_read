const pgp = require('pg-promise')();

const localconnection = 'postgres://localhost:5432/remote_read';

const db = pgp(localconnection);

module.exports = db;
