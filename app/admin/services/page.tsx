import CrudPage from "@/components/admin/CrudPage";
import { CONTENT_ICONS } from "@/lib/iconNames";

export default function ServicesPage() {
  return (
    <CrudPage
      title="Services"
      apiPath="/api/admin/services"
      fields={[
        { key: "icon", label: "Icon", type: "select", options: CONTENT_ICONS, hint: "pick an icon" },
        { key: "title", label: "Title", hint: "use \\n for a line break" },
        { key: "tag", label: "Tag", hint: "badge, e.g. Most Popular" },
        { key: "tagline", label: "Tagline", hint: "short subtitle under the title", list: false },
        { key: "color", label: "Color", type: "color", hint: "card accent — pick or use a custom hex", list: false },
        { key: "items", label: "Items", type: "array", hint: "card bullet list", list: false },
        { key: "detail.what", label: "Detail — What is it", type: "textarea", hint: "what the service is", list: false },
        { key: "detail.who", label: "Detail — Who is it for", type: "textarea", hint: "ideal clients", list: false },
        { key: "detail.how", label: "Detail — How we do it", type: "array", hint: "steps, one per line", list: false },
        { key: "detail.perfectFor", label: "Detail — Perfect For", type: "array", hint: "tags, one per line", list: false },
      ]}
    />
  );
}
