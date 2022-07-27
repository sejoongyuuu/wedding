import Comment from "./models/comment";
import connectDB from "./db";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const comment = new Comment({
            name: req.body.name,
            password: req.body.password,
            content: req.body.content
        });
        try {
            console.log("comment->" + comment);
            const result = await comment.save();
            return res.status(200).json(result);
        } catch (error) {
            console.log("error : " + error);
        }
    }

    if (req.method === 'GET') {
        const comments = await Comment.find({});
        return res.status(200).json({comments: comments});
    }
}
export default connectDB(handler);