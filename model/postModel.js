const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
        uid: {
                required: true,
                type: String,
        },
})

const CommentSchema = new mongoose.Schema({
        uid: {
                required: true,
                type: String,
        },
        comment: {
                default: "",
                type: String,
        }
})

const PostSchema = new mongoose.Schema({
        uid: {
                required: true,
                type: String,
        },
        postUrl: {
                type: String,
                required: true,
        },
        createdAt:{ 
                type: Date,
                default: Date.now
        }, 
        like: [LikeSchema],
        comments: [CommentSchema]
})

const PostModel = new mongoose.model("post",PostSchema)

module.exports = PostModel
