const app = require('express')()

const request = require('request');
const url = require ('url');

const host = process.env.DEFAULT_BACKEND_URL || 'http://localhost:3000'

app.get('/', (req, res) => {
    request(host, { json: true }, (err, response, body) => {
        if (err) {  res.send(err); }
        res.send("Fruit: " + response.body)
    });
});

module.exports.app = app;
 
