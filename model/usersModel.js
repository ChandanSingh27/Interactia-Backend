const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
        _id:{
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
        },
        follower: [{type: String}],
        following: [{type: String}]

})

const UserModel = mongoose.model('Users',UserSchema)

module.exports = UserModel