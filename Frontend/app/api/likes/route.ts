import { NextRequest, NextResponse } from "next/server";

const likesStore: Record<string, number> = {};

export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get("postId");
  if (!postId) return NextResponse.json({ likes: 0 });

  return NextResponse.json({ likes: likesStore[postId] || 0 });
}

export async function POST(req: NextRequest) {
  const { postId } = await req.json();
  if (!postId) return NextResponse.json({ likes: 0 });

  likesStore[postId] = (likesStore[postId] || 0) + 1;
  return NextResponse.json({ likes: likesStore[postId] });
}

export async function DELETE(req: NextRequest) {
  const { postId } = await req.json();
  if (!postId) return NextResponse.json({ likes: 0 });

  likesStore[postId] = Math.max((likesStore[postId] || 0) - 1, 0);
  return NextResponse.json({ likes: likesStore[postId] });
}
