var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

const api = require('../controllers/api');

/**
 * Configure JWT
 */

app.options('*', cors());

router.get('/p/:id', function (req, res) {
    api.getImg(req,res);
})

module.exports = router;
