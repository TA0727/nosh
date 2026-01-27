export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <div className="flex flex-col gap-2">
          <div>© {new Date().getFullYear()} SAKEMARU Meals</div>
          <div className="text-xs">※デモサイト（決済・配送・会員機能は未実装）</div>
        </div>
      </div>
    </footer>
  );
}
