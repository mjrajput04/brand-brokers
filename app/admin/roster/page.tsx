import CrudPage from "@/components/admin/CrudPage";
import { CONTENT_ICONS } from "@/lib/iconNames";

export default function RosterPage() {
  return (
    <CrudPage
      title="Roster"
      apiPath="/api/admin/roster"
      fields={[
        { key: "handle", label: "Handle", hint: "e.g. @techwithalex" },
        { key: "niche", label: "Niche", hint: "e.g. Tech & Gadgets" },
        { key: "followers", label: "Followers", hint: "e.g. 2.4M" },
        { key: "icon", label: "Icon", type: "select", options: CONTENT_ICONS, hint: "pick an icon" },
        { key: "description", label: "Description", type: "textarea", hint: "long bio shown in the Know More modal", list: false },
        { key: "socials.instagram", label: "Instagram URL", hint: "full profile link", list: false },
        { key: "socials.youtube", label: "YouTube URL", hint: "full channel link", list: false },
        { key: "socials.facebook", label: "Facebook URL", hint: "full profile link", list: false },
        { key: "socials.snapchat", label: "Snapchat URL", hint: "full profile link", list: false },
      ]}
    />
  );
}
