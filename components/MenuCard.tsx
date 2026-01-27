"use client";

import type { MenuItem } from "../lib/types";
import { jpy } from "../lib/money";
import Badge from "./Badge";
import { useCart } from "../store/cart";

export default function MenuCard({
  item,
  onOpen
}: {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
}) {
  const { add } = useCart();

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl">{item.image}</div>
          <div className="mt-3 text-lg font-semibold">{item.name}</div>
          <div className="mt-1 line-clamp-2 text-sm text-neutral-600">{item.description}</div>
        </div>
        <Badge>{item.category}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
        <span className="rounded-full bg-neutral-100 px-2 py-1">{item.kcal}kcal</span>
        <span className="rounded-full bg-neutral-100 px-2 py-1">P {item.proteinG}g</span>
        <span className="rounded-full bg-neutral-100 px-2 py-1">C {item.carbsG}g</span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-base font-semibold">{jpy(item.price)}</div>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-neutral-100 px-4 py-2 text-sm hover:bg-neutral-200"
            onClick={() => onOpen(item)}
          >
            詳細
          </button>
          <button
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-95"
            onClick={() => add(item)}
          >
            追加
          </button>
        </div>
      </div>
    </div>
  );
}
