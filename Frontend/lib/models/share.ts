import { Schema, model, models } from "mongoose";

const ShareSchema = new Schema({
  postId: String,
  count: { type: Number, default: 0 },
});

export default models.Share || model("Share", ShareSchema);
