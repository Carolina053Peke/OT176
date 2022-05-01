var express = require('express')
var router = express.Router()

const documentationController = require('../controllers/documentationController')

router.get('/docs', documentationController.fetchDoc)


module.exports = router