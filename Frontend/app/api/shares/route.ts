import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

const ShareSchema = new mongoose.Schema({
  postId: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

const Share = mongoose.models.Share || mongoose.model("Share", ShareSchema);

export async function POST(req: NextRequest) {
  await dbConnect();
  const { postId } = await req.json();
  if (!postId) return NextResponse.json({ shares: 0 });

  const share = await Share.findOneAndUpdate(
    { postId },
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  );

  return NextResponse.json({ shares: share.count });
}
