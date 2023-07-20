const CatchAsyncError = require('../middlewares/catchAsyncError.js');
const { ErrorHandler } = require('../middlewares/error.js');
const UserModel = require('../model/usersModel.js')

const registerUser = CatchAsyncError(async (req, res, next) => {
        const { authId } = req.body;
        let user = await UserModel.findOne({authId})
        if (user) return next(new ErrorHandler("User Already Register", 400))
        user = await UserModel.create(req.body)
        res.status(201).json({
                success: true,
                message: "User Register Succefully"
                })
        })

const userNameExistsOrnot = CatchAsyncError(async (req,res,next) => {
                const {username} = req.params;
                let user = await UserModel.findOne({username})
                if(user) return next(new ErrorHandler("UserName Already Exixsts..."),404)
                res.status(200).json({
                        success:true,
                        message:"Successfully UserName Choose"
                })
        }
)

module.exports = { registerUser,userNameExistsOrnot }

