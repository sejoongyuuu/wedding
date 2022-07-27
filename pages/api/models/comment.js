import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    content: String,
    createdDate: {
        type: Date,
        default: Date.now.toLocaleString()
    }
})

const Comment = mongoose.model('Comment', commentSchema, "comments");
export default Comment;