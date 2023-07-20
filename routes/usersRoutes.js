const express = require('express')
const { registerUser,userNameExistsOrnot } = require('../controller/usersControllers.js')
const router = express.Router()


router.post('/register-user',registerUser)
router.get('/:username',userNameExistsOrnot)

module.exports = router