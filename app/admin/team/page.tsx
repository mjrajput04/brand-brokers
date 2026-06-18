import CrudPage from "@/components/admin/CrudPage";
import { CONTENT_ICONS } from "@/lib/iconNames";

export default function TeamPage() {
  return (
    <CrudPage
      title="Team"
      apiPath="/api/admin/team"
      fields={[
        { key: "name", label: "Name", hint: "full name shown on the card" },
        { key: "role", label: "Role", hint: "e.g. Co-Founder & CEO" },
        { key: "icon", label: "Icon", type: "select", options: CONTENT_ICONS, hint: "pick an icon" },
        { key: "color", label: "Color", type: "color", hint: "accent — pick or use a custom hex", list: false },
        { key: "linkedin", label: "LinkedIn", hint: "profile URL", list: false },
        { key: "description", label: "Description", type: "textarea", hint: "about & expertise (shown in the modal)", list: false },
      ]}
    />
  );
}
