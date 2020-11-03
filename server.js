const { request } = require('express');
const express = require('express');
const app = express();
var path = require('path');
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/azurestorage', (req, res) => {
    res.sendFile(path.join(__dirname + '/storage.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
