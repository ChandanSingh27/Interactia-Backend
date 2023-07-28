const CatchAsyncError = require('../middlewares/catchAsyncError.js');
const { ErrorHandler } = require('../middlewares/error.js');
const UserModel = require('../model/usersModel.js');

const userAlreadyRegisterOrNot = CatchAsyncError(async(req,res,next) => {
        const {_id} = req.body;
        let user = await UserModel.findOne({_id})
        if(!user) res.status(400).json({
                success: false,
                message: "user not register..."
        })
        else{
                res.status(200).json({
                        success: true,
                        message: "user already register..."
                })
        }
})

const uploadUserProfileLink = CatchAsyncError(async (req,res,next) => {
        let {_id,imageUrl} = req.body;
        let user = await UserModel.updateOne({_id},{$set: {imageUrl:imageUrl}})
        res.status(200).json({
                success:true,
                message: "image url update successfully"
        })
})

const registerUser = CatchAsyncError(async (req, res, next) => {
        const { _id } = req.body;
        let user = await UserModel.findOne({ _id })
        if (user) return next(new ErrorHandler("User Already Register", 400))
        user = await UserModel.create(req.body)
        res.status(201).json({
                success: true,
                message: "User Register Successfully"
        })
})

const userNameExistsOrnot = CatchAsyncError(async (req, res, next) => {
        const { username } = req.params
        let user = await UserModel.findOne({ username })
        if (user) return next(new ErrorHandler("Username Already Exists..."), 404)
        res.status(200).json({
                success: true,
                message: "Username created Successfully"
        })
}
)
const listOfUserFollowersFollowings = CatchAsyncError(async (req, res, next) => {
        const { _id } = req.body

        let user = await UserModel.findOne({ _id })
        if (!user) return next(new ErrorHandler("User does'nt  exists"))

        res.status(200).json({
                success: true,
                follower: user.follower,
                following: user.following
        })
})

const userStartFollowing = CatchAsyncError(async (req, res, next) => {

        const requestedUserId = req.body.requestedUserId
        const acceptedUserId = req.body.acceptedUserId
        let requestUser = await UserModel.findOne({ _id: requestedUserId })
        if (!requestUser) return next(new ErrorHandler("Requested User not found", 404))
        let user = await UserModel.findOne({ _id: acceptedUserId })
        if (!user) return next(new ErrorHandler("User not found", 404))
        await UserModel.updateOne({ _id: acceptedUserId }, { $addToSet: { follower: requestedUserId } })
        await UserModel.updateOne({ _id: requestedUserId }, { $addToSet: { following: acceptedUserId } })
        res.status(201).json({
                success: true,
                message: "add successfully"
        })

})

const unfollowUser = CatchAsyncError(async (req, res, next) => {
        
        const { _id, unfollowerUserId } = req.body
        //first checking users are exist or not 
        let userExists = await UserModel.findOne({_id: _id})
        if(!userExists) return next(new ErrorHandler(`user not exist ${_id}`))
        userExists = await UserModel.findOne({_id: unfollowerUserId})
        if(!userExists) return next(new ErrorHandler(`user not exist ${unfollowerUserId}`))
        //then checking unfollowerUserId present or not in my following[] array
        const user = await UserModel.findOne({ $and: [{ _id: _id }, { following: unfollowerUserId }] })
        if (!user) return next(new ErrorHandler(`you not following ${unfollowerUserId}`))
        await UserModel.updateOne({ $and: [{ _id: _id }, { following: unfollowerUserId }] }, { $pull: { following: unfollowerUserId } })
        await UserModel.updateOne({ $and: [{ _id: unfollowerUserId }, { follower: _id }] }, { $pull: { follower: _id } })
        res.status(200).json({
                success: true,
                message: "user removed successfully"
        })
})

module.exports = { registerUser, userNameExistsOrnot, listOfUserFollowersFollowings, userStartFollowing, unfollowUser,userAlreadyRegisterOrNot,uploadUserProfileLink }

