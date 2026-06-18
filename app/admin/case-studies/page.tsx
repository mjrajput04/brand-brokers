import CrudPage from "@/components/admin/CrudPage";
import { STAT_ICONS } from "@/lib/iconNames";

export default function CaseStudiesPage() {
  return (
    <CrudPage
      title="Case Studies"
      apiPath="/api/admin/case-studies"
      fields={[
        { key: "brand", label: "Brand" },
        { key: "category", label: "Category", hint: "e.g. Gaming App · Influencer Marketing" },
        { key: "color", label: "Color", type: "color", hint: "main accent — pick or custom hex", list: false },
        { key: "accentLight", label: "Accent (light)", type: "color", hint: "lighter accent for light mode", list: false },
        { key: "objective", label: "Objective", type: "textarea", list: false },
        { key: "strategy", label: "Strategy", type: "textarea", list: false },
        { key: "execution", label: "Execution Points", type: "array", list: false },
        {
          key: "stats", label: "Stats", type: "rows", list: false,
          hint: "each stat box: a value, a label, and an icon",
          itemFields: [
            { key: "value", label: "Value", type: "text" },
            { key: "label", label: "Label", type: "text" },
            { key: "icon", label: "Icon", type: "select", options: STAT_ICONS },
          ],
        },
        { key: "fullDetail.background", label: "Full Detail — Background", type: "textarea", list: false },
        { key: "fullDetail.approach", label: "Full Detail — Approach", type: "textarea", list: false },
        { key: "fullDetail.results", label: "Full Detail — Results", type: "textarea", list: false },
        { key: "fullDetail.learnings", label: "Full Detail — Learnings", type: "textarea", list: false },
      ]}
    />
  );
}
