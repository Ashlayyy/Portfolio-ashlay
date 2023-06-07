/* Requiring all non-local packages */
const express = require('express')
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

/*Requiring all local packages */
//eslint-disable-next-line no-unused-vars
const logger = require('./utilities/logger');

/* Starting app */
const app = express();
const port = process.env.PORT || 8000;

/* Allowing app to use external packages */
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//app.use(helmet.contentSecurityPolicy());
//app.use(helmet.crossOriginEmbedderPolicy());
//app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use(morgan('dev'));


/* Setting routes */
app.use('/', require('./routes/index'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/html', express.static('public/html'));
app.use('/images', express.static('public/images'));
app.use('/json', express.static('json'));
app.use('/CustomComponents', express.static('public/components'));

app.use(favicon(__dirname + '/public/images/favicon.ico'));

/* Starting app on port specified above */
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});