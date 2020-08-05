const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gitHubLink: {
        type: String,
        required: true
    },
    siteLink: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("project", Project);