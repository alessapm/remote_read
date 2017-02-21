const pgp = require('pg-promise')();

const localconnection = process.env.DATABASE_URL || 'postgres://localhost:5432/remote_read';

const db = pgp(localconnection);

module.exports = db;
