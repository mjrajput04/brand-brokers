import CrudPage from "@/components/admin/CrudPage";

export default function TeamPage() {
  return (
    <CrudPage
      title="Team"
      apiPath="/api/admin/team"
      fields={[
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
      ]}
    />
  );
}
