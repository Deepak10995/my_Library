const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    publishDate:{
        type: Number,
        required: true
    },
    pageCount:{
        type: Number,
        required: true
    },
    timestamps: {
        createdAt: 'created_at',
    },
    coverImageName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'author'
    }
});

module.exports = mongoose.model('Book', bookSchema); 