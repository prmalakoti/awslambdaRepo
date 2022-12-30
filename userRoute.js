const express = require('express');
router = express.Router();
const userController = require('./sampleController/sample')
const Token = require('./sampleController/jwtToken')

router.get('/sample',  userController.sample)
router.get('/token',  Token.getToken)


module.exports = router;