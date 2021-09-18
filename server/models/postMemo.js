import mongoose from 'mongoose';

const memoSchema = mongoose.Schema({
    title : String,
    message: String,
    createdAt:{
        type: Date,
        default: new Date()
    }
});

// Create model
const PostMemo = mongoose.model('PostMemo', memoSchema);

export default PostMemo;
