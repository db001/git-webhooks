// Webhook payload URL http://localhost:${PORT}/payload

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');

const app = express();

require('dotenv').config();

// app.set('views', path.join(__dirname, 'views')); // Folder containing pug files
// app.set('view engine', 'pug');

// Takes raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});