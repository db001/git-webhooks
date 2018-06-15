const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

require('dotenv').config();

// Takes raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 2345);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running on port ${server.address().port}`);
});
