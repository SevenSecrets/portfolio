const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello!")
});

app.get("/projects", (req, res) => {
    res.send("this is where you'll get all the projects.")
})

app.post('/projects', (req, res) => {
    res.send('this is where new project data will be sent.')
});

app.get("/projects/:projectId", (req, res) => {
    res.send("this is where you'll get individual projects by id.")
})

app.put('/projects/:projectId', (req, res) => {
    res.send("this is where you'll update a project according to id.")
});

app.delete("/projects/:projectId", (req, res) => {
    res.send("this is where you'll delete a project according to id.")
})

app.listen(port, () => {
    console.log(`app listening on port ${port}.`)
});