const commentsStore: Record<string, unknown[]> = {};

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get("postId");
  if (!postId) return NextResponse.json({ comments: [] });

  return NextResponse.json({ comments: commentsStore[postId] || [] });
}

export async function POST(req: NextRequest) {
  const { postId, name, text } = await req.json();
  if (!postId || !name || !text) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newComment = { id: Date.now().toString(), postId, name, text, createdAt: new Date() };

  if (!commentsStore[postId]) commentsStore[postId] = [];
  commentsStore[postId].push(newComment);

  return NextResponse.json({ comment: newComment });
}
