import { Schema, model, models } from "mongoose";

const LikeSchema = new Schema({
  postId: String,
  count: { type: Number, default: 0 },
});

export default models.Like || model("Like", LikeSchema);
