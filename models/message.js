const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    author: {type: String},
    message: {type: String, required: true, maxLength: 200},
    date: {type: Date},
})

module.exports = mongoose.model("Message", MessageSchema)