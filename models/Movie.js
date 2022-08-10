const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
        maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [2, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.']
    },
    category: {
        type: String,
        maxlength: 30,
        minlength: 1
    },
    country: {
        type: String,
        maxlength: 30,
        minlength: 1
    },
    year: {
        type: Number,
        maxlength: Date.now.year,
        minlength: 1800
    },
    imdb_score: {
        type: Number,
        maxlength: 10,
        minlength: 0
    },
    director_id: Schema.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('movie', MovieSchema)