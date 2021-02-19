import express from 'express';
const app = express();
import path from 'path';
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/iss', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'iss.html'));
});

app.get('/azurestorage', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'storage.html'));
})

app.get('/kassiendpoint', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'Kassi.html'));
});

app.get('/wifisurvey', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'wifisurvey.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
