const { Client } = require("pg");

const db_url =
  process.env.DATABASE_URL ||
  "socketio.postgres.database.azure.com";

const client = new Client({
  connectionString: db_url,
  ssl: {
    rejectUnauthorized: false, // Använd inte i produktion
  },
});

client.connect();

const messagesTable = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message TEXT,
    sender TEXT,
    room TEXT
  )
`;

client.query(messagesTable);

module.exports = client;
