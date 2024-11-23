const express = require('express');
//express woutes setup
const router = express.Router();
//importing controller
const {dashboard,stock} = require('./../controllers/adminController')

//signup user
router.get('/dashboard',dashboard)

//login user
router.get('/stock',stock)

module.exports = router;