const proxy = require('express-http-proxy');
const app = require('express')(); 
const { v4 } = require('uuid');


app.get('/api/test', (req, res) => {
  res.send('OK');
});

app.use('/api/*', proxy('https://papi.cekpara.com', {
  https: true,
}));



module.exports = app;
