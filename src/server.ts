import express from 'express';
const app = express();
import path from 'path';
import * as appinsights from 'applicationinsights'
const port = process.env.PORT;
app.use(express.json());

appinsights.setup(`${process.env.APPINSIGHTS_INSTRUMENTATIONKEY}`)
.setAutoDependencyCorrelation(true)
.setAutoCollectRequests(true)
.setAutoCollectPerformance(true, true)
.setAutoCollectExceptions(true)
.setAutoCollectDependencies(true)
.setAutoCollectConsole(true)
.setUseDiskRetryCaching(true)
.setSendLiveMetrics(false)
.setDistributedTracingMode(appinsights.DistributedTracingModes.AI)
.start();

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
