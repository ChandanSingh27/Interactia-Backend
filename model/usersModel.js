const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
        authId:{
                type: String,
                unqiue: true,
                required: true,
        },
        fcmToken: {
                type: String,
                unqiue: true,
                required: true,
        },
        fullName: {
                type: String,
                required: true,
        },
        imageUrl: String,
        email: {
                type: String,
                unqiue: true,
                required: true,
        },
        username: {
                type: String,
                unqiue: true,
                required: true,
        }
})

const UserModel = mongoose.model('Users',UserSchema)

module.exports = UserModel