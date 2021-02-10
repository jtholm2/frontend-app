import express from 'express';
const app = express();
import path from 'path';
import appInsights from 'applicationinsights'
const port = process.env.PORT;
app.use(express.json());

appInsights.setup('67aeb7cb-5815-4a0b-aaf5-f75c77140ff5').start();

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

app.get('/headermenu', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'headermenu.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
