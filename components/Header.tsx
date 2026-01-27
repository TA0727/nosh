"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";

export default function Header() {
  const { lineCount, toggleDrawer } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">🍱</span>
          <span>SAKEMARU Meals</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:text-neutral-700" href="/menu">
            メニュー
          </Link>
          <Link className="hover:text-neutral-700" href="/checkout">
            申込み
          </Link>
          <button
            type="button"
            className="relative rounded-full bg-neutral-900 px-4 py-2 text-white shadow-soft hover:opacity-95"
            onClick={() => toggleDrawer(true)}
          >
            カート
            {lineCount > 0 && (
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs tabular-nums">
                {lineCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
