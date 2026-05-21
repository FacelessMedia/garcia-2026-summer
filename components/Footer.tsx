import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-chicago-navy py-12 text-white/80">
      {/* Chicago flag stripe on top edge */}
      <div className="absolute inset-x-0 top-0 h-1 bg-chicago-red" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-chicago-red">
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
              <ChicagoStar size={14} />
            </div>
            <p className="font-display text-base font-semibold text-white">
              Christian Garcia · Summer 2026
            </p>
          </div>

          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            Off-day games
          </Link>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/60">
          Sample plan for the Leahy family. Every detail is editable — this is
          the conversation, not the contract. Destination photos via Wikipedia /
          Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
}
