import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { getAdminFromCookie } from "@/lib/auth";
import { CaseStudy } from "@/lib/models/Content";

export async function GET() {
  await connectDB();
  const data = await CaseStudy.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const admin = await getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const doc = await CaseStudy.create(body);
  return NextResponse.json(doc);
}
