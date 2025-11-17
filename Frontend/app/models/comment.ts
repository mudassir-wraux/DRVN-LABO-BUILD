import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  postId: String,
  name: String,
  text: String,
  createdAt: Date,
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
