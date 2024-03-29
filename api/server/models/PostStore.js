const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    tag: {
        type:String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type:String,
        required: true
    },
    date: {
      type:String,
      required: true
  }
},  { versionKey: false })


const Post = mongoose.model('Post', postSchema);

module.exports = { Post }