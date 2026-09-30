import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StageTime-Pilot — Redezeit. Klar. Bühne.",
  description:
    "Kostenlose Redezeituhr für Events: Countdown, Uhrzeit, Show/PGM, NDI und Remote — by Tasty-World.",
};

const features = [
  {
    title: "Show & PGM",
    body: "Fullscreen-Ausgabe auf einem oder mehreren Displays, Operator-Vorschau 1:1.",
  },
  {
    title: "Chroma-Key",
    body: "Greenscreen/Bluescreen-Hintergründe für vMix und OBS — nur die Zeit bleibt im Bild.",
  },
  {
    title: "NDI / RTMP / UDP",
    body: "Ohne HDMI: Timer als Netzwerksignal an die Regie schicken.",
  },
  {
    title: "Remote iPad",
    body: "Zeitanzeige über WLAN im Browser — plus HTTP-API für Cue-Pilot und Companion.",
  },
  {
    title: "Schnellwahl & Hinweise",
    body: "Presets, Gelb/Rot-Schwellen, Nachrichten auf die Stage.",
  },
  {
    title: "Kostenlos",
    body: "Kein Abo, keine Seat-Lizenz — Download, starten, Show machen.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo-StageTime-Pilot.png"
              alt="StageTime-Pilot by Tasty-World"
              className="h-20 w-auto rounded-xl bg-[#f4f6f8] px-3 py-2 sm:h-28"
            />
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Redezeit. Klar. Bühne.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Digitale Redezeituhr für Veranstaltungen — Countdown oder Uhrzeit,
              Show-Fenster, NDI und iPad-Remote. Kostenlos von Tasty-World.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
              >
                Kostenlos downloaden
              </Link>
              <Link
                href="#features"
                className="rounded-lg border border-line bg-bg1 px-5 py-2.5 text-sm font-medium text-text hover:bg-bg2"
              >
                Funktionen
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-bg1 p-6 shadow-[0_30px_80px_-40px_rgba(46,196,182,0.5)]">
            <div className="rounded-xl bg-[#00b140] px-6 py-16 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Show Preview
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold tabular-nums text-white sm:text-7xl">
                05:00
              </p>
              <p className="mt-3 text-sm text-white/80">Greenscreen · NDI ready</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
          Funktionen
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Alles, was du für Redezeiten auf der Bühne brauchst — ohne Abo.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-line bg-bg1/80 p-5"
            >
              <h3 className="font-semibold text-teal">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-2xl border border-line bg-bg1 px-8 py-10 sm:px-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
              Bereit für die nächste Redezeit?
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              macOS und Windows — kostenlos laden, öffnen, Show starten.
            </p>
            <Link
              href="/download"
              className="mt-8 inline-flex rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
            >
              Zum Download
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
