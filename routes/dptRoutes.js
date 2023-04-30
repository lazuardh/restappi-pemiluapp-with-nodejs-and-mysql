var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const DPTController = require('../controllers/dptController');

/* GET users listing. */
router.get('/',verifyToken, DPTController.getAllDatasDPT);
router.get('/:nik',verifyToken, DPTController.getDatasByNIK);

module.exports = router;
