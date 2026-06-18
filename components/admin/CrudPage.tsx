"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X, Check } from "lucide-react";
import { getIcon } from "@/lib/icons";

interface Field {
  key: string;
  label: string;                                   // short — table header + form label
  type?: "text" | "textarea" | "array" | "number" | "json" | "select" | "color" | "rows";
  options?: string[];                              // choices for type "select"
  itemFields?: Field[];                            // per-row sub-fields for type "rows"
  hint?: string;                                   // optional help text, shown in the form only
  list?: boolean;                                  // show as a table column? (default: short types only)
}

interface Props {
  title: string;
  apiPath: string;
  fields: Field[];
}

// Admin is always dark — inline colors so the public light/dark theme can't affect it.
const C = { text: "#ffffff", dim: "#9ca3af", faint: "#6b7280", cell: "#d1d5db" };

// Quick-pick palette for "color" fields (native picker handles anything else).
const PRESET_COLORS = ["#ffffff", "#a78bfa", "#fbbf24", "#4ade80", "#22d3ee", "#f472b6", "#60a5fa", "#ef4444"];

const inList = (f: Field) => f.list ?? (f.type == null || f.type === "text" || f.type === "number" || f.type === "select");

const cellText = (v: any) => {
  if (Array.isArray(v)) return v.map((x) => (x && typeof x === "object" ? JSON.stringify(x) : x)).join(", ");
  if (v != null && typeof v === "object") return JSON.stringify(v);
  return v ?? "";
};

// Dotted keys like "detail.what" read/write nested objects, so complex fields
// can be edited as plain inputs instead of raw JSON.
const getPath = (obj: any, path: string) =>
  path.split(".").reduce((o: any, k) => (o == null ? undefined : o[k]), obj);

const setPath = (obj: any, path: string, value: any) => {
  const keys = path.split(".");
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (o[keys[i]] == null || typeof o[keys[i]] !== "object") o[keys[i]] = {};
    o = o[keys[i]];
  }
  o[keys[keys.length - 1]] = value;
};

export default function CrudPage({ title, apiPath, fields }: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const listFields = fields.filter(inList);

  const fetchItems = async () => {
    const res = await fetch(apiPath);
    setItems(await res.json());
  };

  useEffect(() => { fetchItems(); }, []);

  const openCreate = () => {
    const empty: any = {};
    fields.forEach((f) => (empty[f.key] = f.type === "rows" ? [] : ""));
    setForm(empty); setEditId(null); setShowForm(true);
  };

  const openEdit = (item: any) => {
    const f: any = {};
    fields.forEach((field) => {
      const raw = getPath(item, field.key);
      if (field.type === "array") f[field.key] = (raw || []).join("\n");
      else if (field.type === "json") f[field.key] = raw != null ? JSON.stringify(raw, null, 2) : "";
      else if (field.type === "rows") f[field.key] = Array.isArray(raw) ? raw : [];
      else f[field.key] = raw ?? "";
    });
    setForm(f); setEditId(item._id); setShowForm(true);
  };

  const handleSave = async () => {
    const body: any = {};
    for (const f of fields) {
      let value: any;
      if (f.type === "array") {
        value = (form[f.key] || "").split("\n").map((s: string) => s.trim()).filter(Boolean);
      } else if (f.type === "number") {
        value = form[f.key] === "" || form[f.key] == null ? null : Number(form[f.key]);
      } else if (f.type === "json") {
        const raw = form[f.key];
        if (raw == null || raw.trim() === "") { value = null; }
        else {
          try { value = JSON.parse(raw); }
          catch { alert(`Invalid JSON in "${f.label}". Please fix it before saving.`); return; }
        }
      } else if (f.type === "rows") {
        value = (Array.isArray(form[f.key]) ? form[f.key] : []).filter((row: any) => (f.itemFields || []).some((sub) => (row[sub.key] ?? "") !== ""));
      } else {
        value = form[f.key];
      }
      setPath(body, f.key, value);
    }
    setLoading(true);
    const url = editId ? `${apiPath}/${editId}` : apiPath;
    const method = editId ? "PUT" : "POST";
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    setShowForm(false); setLoading(false); fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`${apiPath}/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="font-black text-2xl md:text-3xl" style={{ color: C.text }}>{title}</h1>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl font-bold text-sm" style={{ background: "#fff", color: "#000" }}>
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" style={{ background: "rgba(0,0,0,0.8)" }}>
          <div className="w-full max-w-2xl rounded-2xl flex flex-col" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", maxHeight: "88vh" }}>
            {/* Header (pinned) */}
            <div className="flex items-center justify-between p-5 sm:p-6 pb-4 flex-shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="font-black text-lg" style={{ color: C.text }}>{editId ? "Edit" : "Create"} {title}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="flex items-center justify-center w-11 h-11 -mr-2 rounded-xl hover:bg-white/10 transition-colors"><X className="w-5 h-5" style={{ color: C.dim }} /></button>
            </div>
            {/* Body (scrolls; short fields sit two-per-row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto flex-1 p-5 sm:p-6">
              {fields.map((f) => {
                const wide = f.type === "textarea" || f.type === "array" || f.type === "json" || f.type === "select" || f.type === "color" || f.type === "rows";
                return (
                <div key={f.key} className={wide ? "sm:col-span-2" : ""}>
                  <label className="text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: C.dim }}>
                    {f.label}
                    {f.type === "array" && <span className="normal-case font-normal" style={{ color: C.faint }}> · one per line</span>}
                    {f.type === "json" && <span className="normal-case font-normal" style={{ color: C.faint }}> · JSON</span>}
                  </label>
                  {f.hint && <p className="text-xs mb-1.5 normal-case" style={{ color: C.faint }}>{f.hint}</p>}
                  {f.type === "color" ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {PRESET_COLORS.map((c) => (
                        <button
                          key={c} type="button" aria-label={c}
                          onClick={() => setForm({ ...form, [f.key]: c })}
                          className="w-8 h-8 rounded-lg flex-shrink-0"
                          style={{ background: c, border: (form[f.key] || "").toLowerCase() === c ? "2px solid #fff" : "1px solid rgba(255,255,255,0.25)" }}
                        />
                      ))}
                      <input
                        type="color"
                        value={/^#[0-9a-fA-F]{6}$/.test(form[f.key] || "") ? form[f.key] : "#ffffff"}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-9 h-8 rounded-lg cursor-pointer flex-shrink-0 bg-transparent"
                        style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                        title="Custom color"
                      />
                      <input
                        type="text" value={form[f.key] ?? ""} placeholder="#ffffff"
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="px-3 py-2 rounded-xl text-sm outline-none w-28"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text }}
                      />
                    </div>
                  ) : f.type === "rows" ? (
                    <div className="flex flex-col gap-2">
                      {(Array.isArray(form[f.key]) ? form[f.key] : []).map((row: any, ri: number) => {
                        const update = (k: string, v: string) => {
                          const rows = [...(Array.isArray(form[f.key]) ? form[f.key] : [])];
                          rows[ri] = { ...rows[ri], [k]: v };
                          setForm({ ...form, [f.key]: rows });
                        };
                        return (
                          <div key={ri} className="flex gap-2 items-center">
                            {(f.itemFields || []).map((sub) =>
                              sub.type === "select" ? (
                                <select
                                  key={sub.key} value={row[sub.key] ?? ""} onChange={(e) => update(sub.key, e.target.value)}
                                  className="px-2 py-2 rounded-lg text-sm outline-none"
                                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text }}
                                >
                                  <option value="" style={{ background: "#111" }}>{sub.label}…</option>
                                  {(sub.options || []).map((o) => <option key={o} value={o} style={{ background: "#111" }}>{o}</option>)}
                                </select>
                              ) : (
                                <input
                                  key={sub.key} type="text" placeholder={sub.label} value={row[sub.key] ?? ""} onChange={(e) => update(sub.key, e.target.value)}
                                  className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm outline-none"
                                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text }}
                                />
                              )
                            )}
                            <button
                              type="button" aria-label="Remove row"
                              onClick={() => { const rows = [...(Array.isArray(form[f.key]) ? form[f.key] : [])]; rows.splice(ri, 1); setForm({ ...form, [f.key]: rows }); }}
                              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-red-500/10" style={{ color: C.dim }}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, [f.key]: [...(Array.isArray(form[f.key]) ? form[f.key] : []), {}] })}
                        className="self-start flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold" style={{ background: "rgba(255,255,255,0.06)", color: C.text }}
                      >
                        <Plus className="w-4 h-4" /> Add row
                      </button>
                    </div>
                  ) : f.type === "select" ? (
                    <div className="flex items-center gap-3">
                      <select
                        value={form[f.key] ?? ""}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="flex-1 px-3 py-2.5 rounded-xl text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text }}
                      >
                        <option value="" style={{ background: "#111" }}>— none —</option>
                        {(f.options || []).map((opt) => (
                          <option key={opt} value={opt} style={{ background: "#111" }}>{opt}</option>
                        ))}
                      </select>
                      {/* Live preview of the chosen icon */}
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        {(() => { const Ico = getIcon(form[f.key]); return <Ico className="w-5 h-5" style={{ color: C.text }} />; })()}
                      </div>
                    </div>
                  ) : f.type === "textarea" || f.type === "array" || f.type === "json" ? (
                    <textarea
                      rows={f.type === "json" ? 8 : 4} value={form[f.key] || ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text, fontFamily: f.type === "json" ? "monospace" : undefined }}
                    />
                  ) : (
                    <input
                      type={f.type === "number" ? "number" : "text"} value={form[f.key] ?? ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: C.text }}
                    />
                  )}
                </div>
              ); })}
            </div>
            {/* Footer (pinned) */}
            <div className="flex flex-col sm:flex-row gap-3 p-5 sm:p-6 pt-4 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button onClick={handleSave} disabled={loading} className="flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-sm disabled:opacity-50" style={{ background: "#fff", color: "#000" }}>
                <Check className="w-4 h-4" /> {loading ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.05)", color: C.dim }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table — only key columns; long/JSON fields are edit-only */}
      <div className="rounded-2xl overflow-hidden overflow-x-auto" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <table className="w-full text-sm" style={{ minWidth: Math.max(420, listFields.length * 160 + 90) }}>
          <thead>
            <tr style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {listFields.map((f) => (
                <th key={f.key} className="text-left px-5 py-3 font-bold text-xs uppercase tracking-widest whitespace-nowrap" style={{ color: C.dim }}>{f.label}</th>
              ))}
              <th className="text-right px-5 py-3 font-bold text-xs uppercase tracking-widest" style={{ color: C.dim }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={listFields.length + 1} className="text-center py-10" style={{ color: C.faint }}>No items yet — click “Add New”.</td></tr>
            )}
            {items.map((item, i) => (
              <tr key={item._id} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {listFields.map((f) => (
                  <td key={f.key} className="px-5 py-3 max-w-xs truncate" style={{ color: C.cell }}>{cellText(item[f.key])}</td>
                ))}
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => openEdit(item)} aria-label="Edit" className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10 transition-colors" style={{ color: C.dim }}>
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(item._id)} aria-label="Delete" className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-red-500/10 transition-colors" style={{ color: C.dim }}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
