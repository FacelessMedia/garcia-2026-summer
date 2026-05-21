import { ChicagoStar } from "@/components/ChicagoStar";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-chicago-navy py-14 text-white/80">
      {/* Chicago flag stripe on top edge */}
      <div className="absolute inset-x-0 top-0 h-1 bg-chicago-red" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-chicago-red">
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
            </div>
            <p className="font-display text-lg font-semibold text-white">
              Christian Garcia · Summer 2026
            </p>
          </div>
          <p className="text-sm text-white/70">
            Lincoln Park, Chicago · References on request · CPR / First Aid certified
          </p>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/60">
          Sample agenda for prospective families. Every detail is editable —
          this is the conversation, not the contract. Destination photos and
          background extracts via Wikipedia / Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
}
