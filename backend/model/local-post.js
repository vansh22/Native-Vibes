import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      cuisine: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      priceRange: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;