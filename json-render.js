const { request } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
var path = require('path');
const port = 3000;
app.use(express.json());


app.get('/isslocation', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
