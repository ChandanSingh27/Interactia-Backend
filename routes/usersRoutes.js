const express = require('express')
const { registerUser,userNameExistsOrnot,listOfUserFollowersFollowings,userStartFollowing,unfollowUser,userAlreadyRegisterOrNot,uploadUserProfileLink } = require('../controller/usersControllers.js')
const router = express.Router()


router.post('/register-user',registerUser)
router.get('/already-register',userAlreadyRegisterOrNot)
router.get('/followers',listOfUserFollowersFollowings)
router.put('/follower-request',userStartFollowing)
router.put('/unfollow-request',unfollowUser)
router.put('/upload-profile-image-url',uploadUserProfileLink)      
router.get('/:username',userNameExistsOrnot)

module.exports = router