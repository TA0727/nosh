"use client";

import Link from "next/link";
import { useCart } from "../store/cart";
import { jpy } from "../lib/money";
import Quantity from "./Quantity";

export default function CartDrawer() {
  const { state, toggleDrawer, subtotal, remove, setQty } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${state.drawerOpen ? "" : "pointer-events-none"}`} aria-hidden={!state.drawerOpen}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${state.drawerOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => toggleDrawer(false)}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-soft transition-transform ${
          state.drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div className="text-lg font-semibold">カート</div>
          <button className="rounded-full bg-neutral-100 px-3 py-2 text-sm hover:bg-neutral-200" onClick={() => toggleDrawer(false)}>
            閉じる
          </button>
        </div>

        <div className="flex h-[calc(100%-140px)] flex-col gap-4 overflow-auto px-6 py-5">
          {state.lines.length === 0 ? (
            <div className="rounded-3xl bg-neutral-50 p-6 text-sm text-neutral-600">
              まだ何も入っていません。メニューから追加してみてください。
              <div className="mt-4">
                <Link className="underline" href="/menu" onClick={() => toggleDrawer(false)}>
                  メニューへ
                </Link>
              </div>
            </div>
          ) : (
            state.lines.map((l) => (
              <div key={l.item.id} className="rounded-3xl bg-neutral-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-2xl">{l.item.image}</div>
                    <div className="mt-2 font-semibold">{l.item.name}</div>
                    <div className="mt-1 text-sm text-neutral-600">{jpy(l.item.price)} / 1食</div>
                  </div>
                  <button className="text-sm text-neutral-500 hover:text-neutral-800" onClick={() => remove(l.item.id)}>
                    削除
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Quantity value={l.qty} onChange={(v) => setQty(l.item.id, v)} />
                  <div className="font-semibold">{jpy(l.item.price * l.qty)}</div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-neutral-200 px-6 py-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">小計</span>
            <span className="font-semibold">{jpy(subtotal)}</span>
          </div>
          <Link
            href="/checkout"
            className={`mt-4 block rounded-full px-6 py-3 text-center text-white shadow-soft ${
              state.lines.length === 0 ? "bg-neutral-300" : "bg-neutral-900 hover:opacity-95"
            }`}
            onClick={() => toggleDrawer(false)}
            aria-disabled={state.lines.length === 0}
          >
            申込みへ
          </Link>
        </div>
      </aside>
    </div>
  );
}
