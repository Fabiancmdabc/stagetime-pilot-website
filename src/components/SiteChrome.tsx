import Link from "next/link";

function BrandLogo({
  variant = "nav",
  priority = false,
}: {
  variant?: "nav" | "hero";
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Logo-StageTime-Pilot.png"
      alt="StageTime-Pilot"
      width={1774}
      height={887}
      className={`brand-logo ${variant === "hero" ? "is-hero" : "is-nav"}`}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg0/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center self-center">
          <BrandLogo variant="nav" />
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/#remote" className="hidden text-muted hover:text-ink sm:inline">
            Remote
          </Link>
          <Link href="/#features" className="text-muted hover:text-ink">
            Funktionen
          </Link>
          <Link href="/download" className="text-muted hover:text-ink">
            Download
          </Link>
          <a
            href="https://tasty-world.com"
            className="hidden text-muted hover:text-ink md:inline"
            target="_blank"
            rel="noreferrer"
          >
            Tasty-World
          </a>
          <Link
            href="/download"
            className="rounded-full bg-amber px-3.5 py-1.5 font-semibold text-bg0 hover:brightness-110"
          >
            Kostenlos laden
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg1/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>StageTime-Pilot · by Tasty-World · kostenlos</p>
        <p>
          <a className="hover:text-amber" href="mailto:hello@tasty-world.com">
            hello@tasty-world.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export { BrandLogo };
