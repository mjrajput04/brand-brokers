import CrudPage from "@/components/admin/CrudPage";

export default function ServicesPage() {
  return (
    <CrudPage
      title="Services"
      apiPath="/api/admin/services"
      fields={[
        { key: "title", label: "Title" },
        { key: "items", label: "Items", type: "array" },
      ]}
    />
  );
}
