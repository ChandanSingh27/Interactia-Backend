const { ErrorHandler } = require("../middlewares/error")
const UserModel = require("../model/usersModel")

const userExistOrNot = async (id) => {
        let user = await UserModel.findOne({_id: id})
        console.log(user);
        if(!user) return false
        return true
}

module.exports = userExistOrNot