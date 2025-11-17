import { Schema, model, models } from "mongoose";

const PostStatsSchema = new Schema({
  postId: { type: String, required: true, unique: true },
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
});

export const PostStats = models.PostStats || model("PostStats", PostStatsSchema);
