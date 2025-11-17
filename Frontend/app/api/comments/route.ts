import { dbConnect } from "@/lib/db";
import Comment from "@/lib/models/Comment";

export async function GET(req: Request) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
  return Response.json(comments);
}

export async function POST(req: Request) {
  await dbConnect();
  const { postId, text } = await req.json();

  const comment = await Comment.create({
    postId,
    text,
    createdAt: new Date(),
  });

  return Response.json(comment);
}
