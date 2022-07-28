    import Comment from "./models/comment";
    import connectDB from "./db";

    const handler = async (req, res) => {

        if (req.method === 'GET') {
            try {
                const totalCount = await Comment.countDocuments({});
                const comments = await Comment.find().sort({"_id": -1});
                return res.status(200).json({
                    "comments": comments,
                    "totalCount": totalCount,
                });

            } catch (e) {
                return res.status(500).json({error: "Cannot get comments"})
            }
        }

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
                return res.status(500).json({error: "Cannot create comment"})
            }
        }
        if (req.method === 'PUT') {
            try {
                const id = req.body.id;
                const result = await Comment.findByIdAndUpdate(id);
                return res.status(200).json({result: result});
            } catch (e) {
                return res.status(500).json({error: "Cannot update"});
            }
        }

        if (req.method === 'DELETE') {
            try {
                const id = req.body.id;
                const result = await Comment.findByIdAndDelete(id);
                return res.status(200).json({result: result});
            } catch (e) {
                return res.status(500).json({error: "Cannot delete"});
            }
        }
    }
    export default connectDB(handler);