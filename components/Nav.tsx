import Link from "next/link";

const links = [
  { href: "#why-christian", label: "Why Christian" },
  { href: "#daily-rhythm", label: "Daily rhythm" },
  { href: "#agenda", label: "Agenda" },
  { href: "#catalog", label: "Destinations" },
  { href: "#customize", label: "Customize" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-forest-100 bg-cream-50/90 backdrop-blur no-print">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#top" className="font-display text-base font-semibold text-ink-900">
          Christian Garcia
          <span className="ml-2 hidden text-sm font-normal text-ink-700/70 sm:inline">
            · Summer 2026
          </span>
        </Link>
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 text-ink-700 transition hover:bg-white hover:text-forest-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-forest-700"
        >
          Book a call
        </Link>
      </nav>
    </header>
  );
}
