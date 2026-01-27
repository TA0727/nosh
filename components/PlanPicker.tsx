"use client";

import { useCart } from "../store/cart";

export default function PlanPicker() {
  const { state, setPlan } = useCart();
  const plan = state.plan;

  const meals = [6, 8, 10] as const;
  const cycles = ["毎週", "隔週"] as const;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="text-lg font-semibold">プランを選ぶ</div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-sm text-neutral-600">食数</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {meals.map((m) => (
              <button
                key={m}
                className={`rounded-full px-4 py-2 text-sm ${
                  plan.mealsPerWeek === m ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
                }`}
                onClick={() => setPlan({ ...plan, mealsPerWeek: m })}
              >
                {m}食
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-neutral-600">配送サイクル</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {cycles.map((c) => (
              <button
                key={c}
                className={`rounded-full px-4 py-2 text-sm ${
                  plan.deliveryCycle === c ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
                }`}
                onClick={() => setPlan({ ...plan, deliveryCycle: c })}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm text-neutral-600">
        選択中：<span className="font-semibold text-neutral-900">{plan.mealsPerWeek}食 / {plan.deliveryCycle}</span>
      </div>
    </div>
  );
}
