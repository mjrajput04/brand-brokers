import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = "mongodb://localhost:27017/brandbrokers";

async function seed() {
  await mongoose.connect(MONGODB_URI);
  const AdminSchema = new mongoose.Schema({ email: String, password: String, name: String });
  const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
  const existing = await Admin.findOne({ email: "admin@broker.com" });
  if (existing) { console.log("Admin already exists"); process.exit(0); }
  const hashed = await bcrypt.hash("Admin#123", 12);
  await Admin.create({ email: "admin@broker.com", password: hashed, name: "Brand Brokers Admin" });
  console.log("✅ Admin seeded: admin@broker.com / Admin#123");
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
