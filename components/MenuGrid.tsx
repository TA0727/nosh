"use client";

import { useMemo, useState } from "react";
import type { MenuCategory, MenuItem } from "@/lib/types";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";

const ALL = "すべて" as const;

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<typeof ALL | MenuCategory>(ALL);
  const [open, setOpen] = useState<MenuItem | null>(null);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return [ALL, ...Array.from(set)] as const;
  }, [items]);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return items.filter((i) => {
      const matchCat = cat === ALL ? true : i.category === cat;
      const matchQ =
        qq.length === 0
          ? true
          : (i.name + " " + i.description + " " + i.tags.join(" ")).toLowerCase().includes(qq);
      return matchCat && matchQ;
    });
  }, [items, q, cat]);

  return (
    <>
      <div className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                c === cat ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
              }`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="検索（例：高P、スパイス…）"
          className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-neutral-400 md:w-80"
        />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onOpen={setOpen} />
        ))}
      </div>

      <MenuModal item={open} onClose={() => setOpen(null)} />
    </>
  );
}
