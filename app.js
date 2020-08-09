const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const db = require('./db');
const Project = require('./models/project-model');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, './portfolio-frontend/build')));

if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`)
        } else {
            next()
        }
    })
}

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.get("/projects", (req, res) => {
    var projects = Project.find({}, (err, response) => {
        res.json(response)
    })
})

app.listen(port, () => {
    console.log(`app listening on port ${port}.`)
});
