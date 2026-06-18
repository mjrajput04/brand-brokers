import { getClients } from "@/lib/content";
import ClientsView from "./ClientsView";

export default async function Clients() {
  const items = await getClients();
  return <ClientsView items={items} />;
}
