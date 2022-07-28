import mongoose, {Schema} from "mongoose";

const moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        default: moment().format("YYYY-MM-DD HH:mm")
    }
})

const Comment = mongoose.model('Comment', commentSchema, "comments");
export default Comment;