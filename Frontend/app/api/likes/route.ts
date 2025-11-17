import { dbConnect } from "@/lib/db";
import Like from "@/lib/models/Like";

export async function POST(req: Request) {
  await dbConnect();
  const { postId } = await req.json();

  const like = await Like.findOneAndUpdate(
    { postId },
    { $inc: { count: 1 }},
    { upsert: true, new: true }
  );

  return Response.json(like);
}
