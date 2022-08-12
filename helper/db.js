const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/movie-api")
    mongoose.connection.on('open', () => {
    })
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err)
    })

    mongoose.Promise = global.Promise
}