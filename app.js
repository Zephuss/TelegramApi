
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routes = require('./routes'),
    log = require('fancy-log'),
    app = express(),
    port = process.env.PORT || 3000;

// setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);


app.listen(port, () => log.info(`listening on port ${port}`));

