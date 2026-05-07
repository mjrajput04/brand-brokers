import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getAdminFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { id: string; email: string };
  } catch {
    return null;
  }
}
