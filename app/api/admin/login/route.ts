import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { Admin } from "@/lib/models/Admin";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await connectDB();
  const admin = await Admin.findOne({ email });
  if (!admin) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET!, { expiresIn: "7d" });
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}
