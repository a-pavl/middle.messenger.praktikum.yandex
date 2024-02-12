import express from 'express';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

const server = express();
const PORT = 3000;

server.use(express.static(__dirname + '/dist'));

server.get('/', function(req, res) {
    res.redirect('./index.html');
});

server.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`);
});
