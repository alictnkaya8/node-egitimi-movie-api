const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        maxlength: 50,
        minlength: 2
    },
    password: {
        type: String,
        minlength: 6
    }
})

module.exports = mongoose.model('user', UserSchema)