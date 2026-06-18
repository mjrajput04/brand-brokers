import { getServices } from "@/lib/content";
import ServicesView from "./ServicesView";

export default async function Services() {
  const items = await getServices();
  return <ServicesView items={items} />;
}
