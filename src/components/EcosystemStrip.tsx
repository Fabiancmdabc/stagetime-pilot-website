import Image from "next/image";
import Link from "next/link";

/** Zusammenspiel ShowRun → Cue-Pilot → StageTime */
export function EcosystemStrip() {
  return (
    <section className="border-b border-line bg-bg1/25">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <RevealKicker />
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          ShowRun GO — Timer startet mit.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Redezeit in der Cue-Tabelle eintragen. Beim GO setzt ShowRun-Pilot die Dauer
          und startet StageTime — parallel kann Cue-Pilot Media feuern.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-line bg-black/30">
            <Image
              src="/screenshots/ecosystem/showrun-go.png"
              alt="ShowRun-Pilot mit Redezeit und GO"
              width={720}
              height={450}
              className="h-40 w-full object-cover object-left-top sm:h-48"
            />
            <figcaption className="px-4 py-3">
              <p className="text-sm font-semibold text-ink">1 · ShowRun-Pilot</p>
              <p className="mt-1 text-xs text-muted">Redezeit + GO</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-line bg-black/30">
            <Image
              src="/screenshots/ecosystem/cuedeck.jpg"
              alt="Cue-Pilot"
              width={720}
              height={450}
              className="h-40 w-full object-cover object-top sm:h-48"
            />
            <figcaption className="px-4 py-3">
              <p className="text-sm font-semibold text-ink">2 · Cue-Pilot</p>
              <p className="mt-1 text-xs text-muted">Media parallel</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-amber/30 bg-black/30">
            <Image
              src="/screenshots/timer-dark.png"
              alt="StageTime Timer"
              width={720}
              height={450}
              className="h-40 w-full object-cover object-center sm:h-48"
            />
            <figcaption className="px-4 py-3">
              <p className="text-sm font-semibold text-amber">3 · StageTime</p>
              <p className="mt-1 text-xs text-muted">Countdown auf Show &amp; Remote</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="https://tasty-world.com/showrun-pilot"
            className="rounded-full border border-white/25 bg-black/25 px-5 py-2.5 text-sm font-medium text-ink hover:border-amber/50"
          >
            ShowRun-Pilot →
          </Link>
          <a
            href="https://cue-pilot-alpha.vercel.app"
            className="rounded-full border border-white/25 bg-black/25 px-5 py-2.5 text-sm font-medium text-ink hover:border-amber/50"
          >
            Cue-Pilot →
          </a>
        </div>
      </div>
    </section>
  );
}

function RevealKicker() {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
      Tasty World · Zusammenspiel
    </p>
  );
}
