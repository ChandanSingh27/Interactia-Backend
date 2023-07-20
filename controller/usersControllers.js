const CatchAsyncError = require('../middlewares/catchAsyncError.js');
const { ErrorHandler } = require('../middlewares/error.js');
const UserModel = require('../model/usersModel.js')

const registerUser = CatchAsyncError(async (req, res, next) => {
        const { _id } = req.body;
        let user = await UserModel.findOne({_id})
        if (user) return next(new ErrorHandler("User Already Register", 400))
        user = await UserModel.create(req.body)
        res.status(201).json({
                success: true,
                message: "User Register Successfully"
                })
        })

const userNameExistsOrnot = CatchAsyncError(async (req,res,next) => {
                const {username} = req.params
                let user = await UserModel.findOne({username})
                if(user) return next(new ErrorHandler("Username Already Exists..."),404)
                res.status(200).json({
                        success:true,
                        message:"Username created Successfully"
                })
        }
)
const listOfUserFollowersFollowings = CatchAsyncError(async (req,res,next) => {
        const {authId} = req.body
        
        let user = await UserModel.findOne({authId})
        if(!user) return next(new ErrorHandler("User does'nt  exists"))

        res.status(200).json({
                success:true,
                follower: user.follower,
                following: user.following
        })
})

const userStartFollowing = CatchAsyncError( async (req,res,next) => {

        const requestedUserId = req.body.requestedUserId
        const acceptedUserId = req.body.acceptedUserId

        let user = await UserModel.findOne({authId: acceptedUserId})
        if(!user) return next(new ErrorHandler("User not found",404))
 
        console.log(requestedUserId);
        const result = await UserModel.updateOne( {authId: acceptedUserId} , {$addToSet: {follower: requestedUserId}})

        console.log(result);
        
        res.status(201).json({
                success: true,
                message: "add successfully"
        })

})

module.exports = { registerUser,userNameExistsOrnot,listOfUserFollowersFollowings,userStartFollowing}

