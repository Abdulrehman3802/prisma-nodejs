const express = require('express')
const constroller = require('../controller/iot.controller')
const router = express.Router()

/** For now Only One Route is created and all of controler functions are tested through this route */
/** You can change or create seprate routes for all function  */
router.route('/customer').get(constroller.getData)

module.exports= router