import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-neutral-900 p-10 text-white shadow-soft">
          <div className="text-sm text-white/70">次の一手</div>
          <div className="mt-2 text-2xl font-semibold">商品データを差し替えて、公開まで最短。</div>
          <div className="mt-3 text-white/80">
            <code className="rounded bg-white/10 px-2 py-1">lib/data.ts</code> を編集するだけでメニューが更新されます。
          </div>
        </div>
      </section>
    </>
  );
}
