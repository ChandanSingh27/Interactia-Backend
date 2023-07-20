const express = require('express')
const { registerUser,userNameExistsOrnot,listOfUserFollowersFollowings,userStartFollowing } = require('../controller/usersControllers.js')
const router = express.Router()


router.post('/register-user',registerUser)
router.get('/followers',listOfUserFollowersFollowings)
router.post('/follower-request',userStartFollowing)     
router.get('/:username',userNameExistsOrnot)

module.exports = router