import { getCaseStudies } from "@/lib/content";
import CaseStudiesView from "./CaseStudiesView";

export default async function CaseStudies() {
  const items = await getCaseStudies();
  return <CaseStudiesView items={items} />;
}
