export function Footer() {
  return (
    <footer className="bg-ink-900 py-12 text-cream-50/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-semibold text-cream-50">
            Christian Garcia · Summer 2026
          </p>
          <p className="text-sm">
            Lincoln Park, Chicago · References on request · CPR / First Aid certified
          </p>
        </div>
        <p className="mt-6 text-xs text-cream-50/60">
          Sample agenda for prospective families. Every detail is editable —
          this is the conversation, not the contract.
        </p>
      </div>
    </footer>
  );
}
