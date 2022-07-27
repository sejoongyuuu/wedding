import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
        dbName: process.env.NEXT_PUBLIC_DB_NAME,
    }, (e) => {
        if (e) {
            console.log("connect error: " + e);
        } else {
            console.log("connected!")
        }
    });
    return handler(req, res)
}
export default connectDB;