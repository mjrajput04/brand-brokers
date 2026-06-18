import { connectDB } from "@/lib/db";
import { Service, CaseStudy, Team, Client, Roster } from "@/lib/models/Content";

// Each fetcher returns fully plain, serializable data (ObjectId/Date -> strings)
// so it is safe to pass from a Server Component into a Client Component.

async function fetchAll(Model: any) {
  await connectDB();
  const docs = await Model.find().sort({ createdAt: 1 }).lean();
  return JSON.parse(JSON.stringify(docs));
}

export async function getServices() {
  return fetchAll(Service);
}

export async function getCaseStudies() {
  return fetchAll(CaseStudy);
}

export async function getTeam() {
  return fetchAll(Team);
}

export async function getClients() {
  return fetchAll(Client);
}

export async function getRoster() {
  return fetchAll(Roster);
}
