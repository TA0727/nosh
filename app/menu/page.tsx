import MenuGrid from "../../components/MenuGrid";
import PlanPicker from "../../components/PlanPicker";
import { MENU } from "../../lib/data";

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        <div className="md:col-span-1">
          <PlanPicker />
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-soft">
            <div className="text-sm text-neutral-600">ヒント</div>
            <div className="mt-2 text-sm">メニュー詳細は「詳細」、カート追加は「追加」。</div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="mb-5">
            <h1 className="text-2xl font-semibold">メニュー</h1>
            <p className="mt-1 text-sm text-neutral-600">検索・カテゴリで絞り込みできます。</p>
          </div>
          <MenuGrid items={MENU} />
        </div>
      </div>
    </section>
  );
}
