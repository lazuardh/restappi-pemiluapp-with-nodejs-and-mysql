var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const votesController = require('../controllers/votesController');

/* GET users listing. */
router.get('/',verifyToken, votesController.getAllDatasVoting);

module.exports = router;
