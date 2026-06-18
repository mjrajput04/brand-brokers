import { getRoster } from "@/lib/content";
import RosterView from "./RosterView";

export default async function Roster() {
  const items = await getRoster();
  return <RosterView items={items} />;
}
