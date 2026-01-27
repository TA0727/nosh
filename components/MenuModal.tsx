"use client";

import type { MenuItem } from "@/lib/types";
import { jpy } from "@/lib/money";
import { useCart } from "@/store/cart";

export default function MenuModal({
  item,
  onClose
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const { add } = useCart();

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-4xl">{item.image}</div>
            <div className="mt-3 text-2xl font-semibold">{item.name}</div>
            <div className="mt-2 text-neutral-600">{item.description}</div>
          </div>
          <button
            className="rounded-full bg-neutral-100 px-3 py-2 text-sm hover:bg-neutral-200"
            onClick={onClose}
          >
            閉じる
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-neutral-700">
          <span className="rounded-full bg-neutral-100 px-3 py-1">{item.category}</span>
          {item.tags.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="text-neutral-500">kcal</div>
            <div className="mt-1 font-semibold">{item.kcal}</div>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="text-neutral-500">Protein</div>
            <div className="mt-1 font-semibold">{item.proteinG}g</div>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="text-neutral-500">Carbs</div>
            <div className="mt-1 font-semibold">{item.carbsG}g</div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-xl font-semibold">{jpy(item.price)}</div>
          <button
            className="rounded-full bg-neutral-900 px-6 py-3 text-white shadow-soft hover:opacity-95"
            onClick={() => add(item)}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}
