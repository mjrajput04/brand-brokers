import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { seedData } from "./seedData.mjs";

const MONGODB_URI = "mongodb://localhost:27017/brandbrokers";

// Loose schemas so every field persists regardless of shape.
const looseSchema = () => new mongoose.Schema({}, { strict: false, timestamps: true });
const model = (name) =>
  mongoose.models[name] || mongoose.model(name, looseSchema());

// Maps a content collection key to its mongoose model name.
const collections = [
  { key: "services", model: "Service" },
  { key: "caseStudies", model: "CaseStudy" },
  { key: "team", model: "Team" },
  { key: "clients", model: "Client" },
  { key: "roster", model: "Roster" },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to", MONGODB_URI);

  // --- Admin upsert (create only if missing) ---
  const AdminSchema = new mongoose.Schema(
    { email: String, password: String, name: String },
    { timestamps: true }
  );
  const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
  const existingAdmin = await Admin.findOne({ email: "admin@broker.com" });
  if (existingAdmin) {
    console.log("Admin already exists — skipped");
  } else {
    const hashed = await bcrypt.hash("Admin#123", 12);
    await Admin.create({
      email: "admin@broker.com",
      password: hashed,
      name: "Brand Brokers Admin",
    });
    console.log("Admin seeded: admin@broker.com / Admin#123");
  }

  // --- Content collections (idempotent: only seed empty collections) ---
  for (const { key, model: modelName } of collections) {
    const Model = model(modelName);
    const arr = seedData[key] || [];
    const count = await Model.countDocuments();
    if (count > 0) {
      console.log(`${modelName}: ${count} doc(s) present — skipped`);
    } else {
      await Model.insertMany(arr);
      console.log(`${modelName}: inserted ${arr.length} doc(s)`);
    }
  }

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
