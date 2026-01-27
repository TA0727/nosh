"use client";

export default function Quantity({
  value,
  onChange
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-2 py-1">
      <button
        type="button"
        className="h-7 w-7 rounded-full bg-white shadow-sm hover:bg-neutral-50"
        onClick={() => onChange(value - 1)}
        aria-label="decrease"
      >
        −
      </button>
      <span className="w-8 text-center text-sm tabular-nums">{value}</span>
      <button
        type="button"
        className="h-7 w-7 rounded-full bg-white shadow-sm hover:bg-neutral-50"
        onClick={() => onChange(value + 1)}
        aria-label="increase"
      >
        +
      </button>
    </div>
  );
}
