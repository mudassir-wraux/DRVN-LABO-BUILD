import { Schema, model, models } from "mongoose";

const LikeSchema = new Schema({
  postId: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

const Like = models.Like || model("Like", LikeSchema);
export default Like;
