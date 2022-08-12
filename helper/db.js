const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb+srv://ali:asd123@node-egitimi-movie-api.6ry0dz2.mongodb.net/?retryWrites=true&w=majority")
    mongoose.connection.on('open', () => {
    })
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err)
    })

    mongoose.Promise = global.Promise
}