import CrudPage from "@/components/admin/CrudPage";

export default function RosterPage() {
  return (
    <CrudPage
      title="Roster"
      apiPath="/api/admin/roster"
      fields={[
        { key: "handle", label: "Handle" },
        { key: "niche", label: "Niche" },
        { key: "followers", label: "Followers" },
      ]}
    />
  );
}
