import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { getAdminFromCookie } from "@/lib/auth";
import { CaseStudy } from "@/lib/models/Content";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const admin = await getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const doc = await CaseStudy.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(doc);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const admin = await getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const { id } = await params;
  await CaseStudy.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
