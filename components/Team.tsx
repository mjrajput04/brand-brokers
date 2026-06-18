import { getTeam } from "@/lib/content";
import TeamView from "./TeamView";

export default async function Team() {
  const items = await getTeam();
  return <TeamView items={items} />;
}
