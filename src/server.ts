import express from 'express';
const app = express();
import path from 'path';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
const port = process.env.PORT;
app.use(express.json());

const appInsights = new ApplicationInsights({ config: {
    instrumentationKey: 'ebf8eb2f-6112-4d1d-a208-1db2b4b5b9dd'
    /* ...Other Configuration Options... */
  } });

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

app.listen(port, () => {
    appInsights.loadAppInsights();
    appInsights.trackPageView(); 
    console.log(`Example app listening at http://localhost:${port}`)
  });
