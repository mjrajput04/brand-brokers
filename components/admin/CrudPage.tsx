"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X, Check } from "lucide-react";

interface Field { key: string; label: string; type?: "text" | "textarea" | "array" }

interface Props {
  title: string;
  apiPath: string;
  fields: Field[];
}

export default function CrudPage({ title, apiPath, fields }: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    const res = await fetch(apiPath);
    setItems(await res.json());
  };

  useEffect(() => { fetchItems(); }, []);

  const openCreate = () => {
    const empty: any = {};
    fields.forEach(f => empty[f.key] = f.type === "array" ? "" : "");
    setForm(empty); setEditId(null); setShowForm(true);
  };

  const openEdit = (item: any) => {
    const f: any = {};
    fields.forEach(field => {
      f[field.key] = field.type === "array" ? (item[field.key] || []).join("\n") : item[field.key] || "";
    });
    setForm(f); setEditId(item._id); setShowForm(true);
  };

  const handleSave = async () => {
    setLoading(true);
    const body: any = {};
    fields.forEach(f => {
      body[f.key] = f.type === "array"
        ? form[f.key].split("\n").map((s: string) => s.trim()).filter(Boolean)
        : form[f.key];
    });
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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white font-black text-3xl">{title}</h1>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-black text-sm" style={{ background: "#fff" }}>
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.8)" }}>
          <div className="w-full max-w-lg p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-black text-lg">{editId ? "Edit" : "Create"} {title}</h2>
              <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
              {fields.map(f => (
                <div key={f.key}>
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-1.5">
                    {f.label} {f.type === "array" && <span className="normal-case text-gray-600">(one per line)</span>}
                  </label>
                  {f.type === "textarea" || f.type === "array" ? (
                    <textarea
                      rows={4} value={form[f.key] || ""}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl text-white text-sm outline-none resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  ) : (
                    <input
                      type="text" value={form[f.key] || ""}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl text-white text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={loading} className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-black text-sm disabled:opacity-50" style={{ background: "#fff" }}>
                <Check className="w-4 h-4" /> {loading ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-xl font-bold text-gray-400 text-sm" style={{ background: "rgba(255,255,255,0.05)" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {fields.map(f => (
                <th key={f.key} className="text-left px-5 py-3 text-gray-500 font-bold text-xs uppercase tracking-widest">{f.label}</th>
              ))}
              <th className="text-right px-5 py-3 text-gray-500 font-bold text-xs uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={fields.length + 1} className="text-center py-10 text-gray-600">No items yet</td></tr>
            )}
            {items.map((item, i) => (
              <tr key={item._id} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {fields.map(f => (
                  <td key={f.key} className="px-5 py-3 text-gray-300 max-w-xs truncate">
                    {Array.isArray(item[f.key]) ? item[f.key].join(", ") : item[f.key]}
                  </td>
                ))}
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(item._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors">
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
