var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const candidatController = require('../controllers/candidatController');

/* GET users listing. */
router.get('/',verifyToken, candidatController.getAllDatasCandidates);

module.exports = router;
