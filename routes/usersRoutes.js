const express = require('express')
const { registerUser,userNameExistsOrnot,listOfUserFollowersFollowings,userStartFollowing,unfollowUser} = require('../controller/usersControllers.js')
const router = express.Router()


router.post('/register-user',registerUser)
router.get('/followers',listOfUserFollowersFollowings)
router.put('/follower-request',userStartFollowing)
router.put('/unfollow-request',unfollowUser)      
router.get('/:username',userNameExistsOrnot)

module.exports = router