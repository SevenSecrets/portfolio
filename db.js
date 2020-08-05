const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://opalFruits:ooLFKoH5ZP6jz8@cluster0.mmpxe.mongodb.net/portfolio?retryWrites=true&w=majority"
const dbName = "portfolio"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true}).catch(e => {
    console.error("Connection error", e.message);
})

const db = mongoose.connection;

module.exports = db