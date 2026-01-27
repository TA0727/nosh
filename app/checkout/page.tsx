"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../store/cart";
import { jpy } from "../lib/money";

export default function CheckoutPage() {
  const router = useRouter();
  const { state, subtotal, toggleDrawer, remove, setQty, setPlan, add, lineCount, clear } = useCart();
  const [loading, setLoading] = useState(false);

  const canSubmit = state.lines.length > 0;

  const summary = useMemo(() => {
    return state.lines.map((l) => ({
      id: l.item.id,
      name: l.item.name,
      qty: l.qty,
      total: l.item.price * l.qty
    }));
  }, [state.lines]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    clear();
    router.push("/thanks");
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">申込み</h1>
      <p className="mt-1 text-sm text-neutral-600">※デモ：決済は行いません。</p>

      <div className="mt-8 grid gap-6 md:grid-cols-5">
        <form onSubmit={onSubmit} className="md:col-span-3">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-lg font-semibold">お届け先</div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                placeholder="お名前"
                required
              />
              <input
                className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                placeholder="電話番号"
                required
              />
              <input
                className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                placeholder="メール"
                type="email"
                required
              />
              <input
                className="md:col-span-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                placeholder="住所"
                required
              />
            </div>

            <div className="mt-7 rounded-2xl bg-neutral-50 p-4 text-sm">
              選択プラン：<span className="font-semibold">{state.plan.mealsPerWeek}食 / {state.plan.deliveryCycle}</span>
            </div>

            <button
              type="submit"
              disabled={!canSubmit || loading}
              className={`mt-6 w-full rounded-full px-6 py-3 text-white shadow-soft ${
                !canSubmit || loading ? "bg-neutral-300" : "bg-neutral-900 hover:opacity-95"
              }`}
            >
              {loading ? "処理中..." : "申込みを確定（デモ）"}
            </button>
          </div>
        </form>

        <aside className="md:col-span-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-lg font-semibold">注文内容</div>

            {summary.length === 0 ? (
              <div className="mt-4 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600">
                カートが空です。メニューから追加してください。
              </div>
            ) : (
              <ul className="mt-4 space-y-3 text-sm">
                {summary.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-neutral-50 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-medium">{s.name}</div>
                      <div className="text-neutral-600">数量：{s.qty}</div>
                    </div>
                    <div className="font-semibold">{jpy(s.total)}</div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-neutral-600">小計</span>
              <span className="text-base font-semibold">{jpy(subtotal)}</span>
            </div>
            <div className="mt-2 text-xs text-neutral-500">
              ※送料/割引/税計算などは本番要件に合わせて追加してください。
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
