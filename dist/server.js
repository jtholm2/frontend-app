"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const path_1 = __importDefault(require("path"));
const port = process.env.PORT;
app.use(express_1.default.json());
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
app.get('/wifisurvey', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'wifisurvey.html'));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map