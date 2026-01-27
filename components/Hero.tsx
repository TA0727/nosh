import Link from "next/link";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 rounded-3xl bg-white p-10 shadow-soft md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <Badge>サブスク冷凍ミール デモ</Badge>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            忙しい日も、<br />
            “ちゃんと美味しい” を。
          </h1>
          <p className="text-neutral-600">
            nosh風のUI/導線を参考にした、メニュー選択〜申込みまで動くテンプレです。
            商品データは差し替えるだけ。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-neutral-900 px-6 py-3 text-white shadow-soft hover:opacity-95"
            >
              メニューを見る
            </Link>
            <Link
              href="/checkout"
              className="rounded-full bg-neutral-100 px-6 py-3 text-neutral-900 hover:bg-neutral-200"
            >
              申込みへ
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-soft">
            <div className="text-sm text-white/70">今週のおすすめ</div>
            <div className="mt-3 text-2xl font-semibold">🍛 牛すじスパイスカレー</div>
            <div className="mt-2 text-white/80">
              香り立つスパイス。タイトにキレる後味。
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-neutral-100 p-6">
              <div className="text-sm text-neutral-600">平均</div>
              <div className="mt-2 text-2xl font-semibold">400kcal台</div>
            </div>
            <div className="rounded-3xl bg-neutral-100 p-6">
              <div className="text-sm text-neutral-600">高たんぱく</div>
              <div className="mt-2 text-2xl font-semibold">P 30g+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
