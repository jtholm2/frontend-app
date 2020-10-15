const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/isslocation', (req, res) => {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(res => res.text())
        .then(text => res.send(text));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
