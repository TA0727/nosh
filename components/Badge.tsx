export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white">
      {children}
    </span>
  );
}
