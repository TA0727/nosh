import Link from "next/link";

export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl bg-white p-10 shadow-soft">
        <div className="text-3xl">✅</div>
        <h1 className="mt-4 text-2xl font-semibold">申込み完了（デモ）</h1>
        <p className="mt-2 text-neutral-600">
          本番では決済/会員/配送などの実装が必要です。まずはUIと導線のたたき台としてお使いください。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-neutral-900 px-6 py-3 text-white shadow-soft hover:opacity-95" href="/menu">
            メニューへ戻る
          </Link>
          <Link className="rounded-full bg-neutral-100 px-6 py-3 hover:bg-neutral-200" href="/">
            トップへ
          </Link>
        </div>
      </div>
    </section>
  );
}
