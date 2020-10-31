var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const bodyparser = require('body-parser');



var apiRouter = require('./routes/api');
var app = express();
app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())


app.use('/api', apiRouter);


//var mysqlConnection = mysql.createConnection('mysql://b3020c234f7bf9:c2f9aeec@eu-cdbr-west-02.cleardb.net/heroku_a055cf7e4179e62?reconnect=true');
//  mysqlConnection.connect();


app.use(cors());

const port = process.env.PORT || 3030;
app.listen(port,()=> console.log(`listen on port ${port}..`));

module.exports = app;