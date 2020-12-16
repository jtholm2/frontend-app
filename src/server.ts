import express from 'express';
const app = express();
import path from 'path';
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/azurestorage', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'storage.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

