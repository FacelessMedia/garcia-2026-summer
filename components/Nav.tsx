import Link from "next/link";
import { ChicagoStar } from "@/components/ChicagoStar";

const links = [
  { href: "/#rhythm", label: "How a week works" },
  { href: "/#weeks", label: "The four weeks" },
  { href: "/#about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-chicago-mist bg-white/85 backdrop-blur no-print">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-base font-semibold text-chicago-navy"
        >
          <ChicagoStar size={16} className="text-chicago-red" />
          Christian Garcia
          <span className="ml-1 hidden text-sm font-normal text-chicago-slate sm:inline">
            · Summer 2026
          </span>
        </Link>
        <ul className="hidden items-center gap-0.5 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 text-chicago-stone transition hover:bg-chicago-mist hover:text-chicago-deep"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="rounded-full bg-chicago-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-chicago-crimson"
        >
          Book a call
        </Link>
      </nav>
    </header>
  );
}
