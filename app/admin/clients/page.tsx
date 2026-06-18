import CrudPage from "@/components/admin/CrudPage";

export default function ClientsPage() {
  return (
    <CrudPage
      title="Clients"
      apiPath="/api/admin/clients"
      fields={[
        { key: "kind", label: "Kind", hint: '"client" for a logo, "stat" for a stat box' },
        { key: "name", label: "Name", hint: "logo alt text (client logos)" },
        { key: "row", label: "Row", type: "number", hint: "logos only: 1 = top marquee, 2 = bottom marquee" },
        { key: "logo", label: "Logo Path", hint: "e.g. /clients/samsung.png", list: false },
        { key: "bg", label: "BG Tint", hint: "hex, optional card background", list: false },
        { key: "num", label: "Stat Number", hint: "stats only, e.g. 1500+", list: false },
        { key: "label", label: "Stat Label", hint: "stats only, e.g. Creators", list: false },
      ]}
    />
  );
}
