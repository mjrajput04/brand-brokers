import CrudPage from "@/components/admin/CrudPage";

export default function ClientsPage() {
  return (
    <CrudPage
      title="Clients"
      apiPath="/api/admin/clients"
      fields={[
        { key: "name", label: "Client Name" },
      ]}
    />
  );
}
