"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const path_1 = __importDefault(require("path"));
const appinsights = __importStar(require("applicationinsights"));
const port = process.env.PORT;
app.use(express_1.default.json());
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
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/iss', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'iss.html'));
});
app.get('/azurestorage', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'storage.html'));
});
app.get('/kassiendpoint', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'Kassi.html'));
});
app.get('/headermenu', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'headermenu.html'));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map