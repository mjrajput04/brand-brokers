import CrudPage from "@/components/admin/CrudPage";

export default function CaseStudiesPage() {
  return (
    <CrudPage
      title="Case Studies"
      apiPath="/api/admin/case-studies"
      fields={[
        { key: "num", label: "Number" },
        { key: "brand", label: "Brand" },
        { key: "objective", label: "Objective", type: "textarea" },
        { key: "strategy", label: "Strategy", type: "textarea" },
        { key: "execution", label: "Execution Points", type: "array" },
      ]}
    />
  );
}
