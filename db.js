const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL
const dbName = "portfolio"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true}).catch(e => {
    console.error("Connection error", e.message);
})

const db = mongoose.connection;

module.exports = db