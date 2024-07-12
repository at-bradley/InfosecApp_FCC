const express = require('express');
const helmet = require('helmet');

const app = express();


//const PORT = process.env.PORT || 3030;

app.use(helmet.hidePoweredBy(),
helmet.xssFilter()
);
app.use(helmet.frameguard({action:'deny'}));
// your code














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Quinoabrah 🥡 ${port}`);
});
