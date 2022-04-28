var express = require('express')
var router = express.Router()

const documentationController = require('../controllers/documentationController')

router.get('/docs')
router.get('/docs/login', documentationController.loginDoc)
router.get('/docs/signup')
router.get('/docs/awsImageUploader')



module.exports = router