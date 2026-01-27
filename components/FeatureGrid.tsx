export default function FeatureGrid() {
  const items = [
    { title: "選ぶのが楽しい", desc: "カテゴリ・検索でスムーズに絞り込み。" },
    { title: "プラン設計", desc: "食数・配送サイクルをUIで選択。" },
    { title: "すぐ差し替え可能", desc: "商品データは data.ts を編集するだけ。" }
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((x) => (
          <div key={x.title} className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="text-lg font-semibold">{x.title}</div>
            <div className="mt-2 text-sm text-neutral-600">{x.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
