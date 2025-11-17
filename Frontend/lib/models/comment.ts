import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
  postId: String,
  text: String,
  createdAt: Date,
});

export default models.Comment || model("Comment", CommentSchema);
