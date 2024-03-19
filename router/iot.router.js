const express = require('express')
const constroller = require('../controller/iot.controller')
const router = express.Router()
router.route('/customer').get(constroller.getData)

module.exports= router