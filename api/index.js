const proxy = require('express-http-proxy');
const app = require('express')(); 

app.use('/api', proxy('https://papi.cekpara.com'));

module.exports = app;
