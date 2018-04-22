var express = require('express');
var router = express.Router();
const {createItems} = require('../../controllers/items/create')

/* GET home page. */
router.post('/', function(req, res) {
    createItem(req, res)
});

module.exports = router;
