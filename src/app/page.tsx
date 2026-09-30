import type { Metadata } from "next";
import Link from "next/link";
import { MessageChromaMock } from "../components/MessageChromaMock";
import { ParallaxMedia } from "../components/ParallaxMedia";
import { RemoteDeviceShowcase } from "../components/RemoteDeviceShowcase";

export const metadata: Metadata = {
  title: "StageTime-Pilot — Redezeit. Klar. Bühne.",
  description:
    "Kostenlose Redezeituhr für Events: Countdown, Chroma-Key, NDI und WLAN-Remote auf iPad & iPhone — by Tasty-World.",
};

const spotlights = [
  {
    id: "chroma",
    kicker: "Chroma-Key",
    title: "Greenscreen raus — nur die Zeit bleibt.",
    body: "Key-Grün, Bluescreen oder Magenta für vMix und OBS. Die Show-Ausgabe ist keyfertig: Overlay ohne HDMI-Kampf.",
    image: "/screenshots/chroma-output.png",
    alt: "Show-Ausgabe mit Greenscreen und Timer 05:00",
    reverse: false,
  },
  {
    id: "ndi",
    kicker: "NDI · RTMP · UDP",
    title: "Ohne Kabel in die Regie.",
    body: "NDI-Quelle „StageTime-Pilot“, RTMP oder MPEG-TS/UDP — Chroma-Key aus dem Look bleibt erhalten.",
    image: "/screenshots/settings-ndi.png",
    alt: "Einstellungen mit NDI-, RTMP- und UDP-Ausgaben",
    reverse: true,
  },
  {
    id: "look",
    kicker: "Look",
    title: "Optik für die Bühne, nicht fürs Dashboard.",
    body: "Schriftgröße, Farben, Gelb/Rot-Schwellen, Ausrichtung — und eine Live-PGM-Vorschau 1:1.",
    image: "/screenshots/look-chroma.png",
    alt: "Look-Tab mit Chroma-Key-Presets und PGM-Vorschau",
    reverse: false,
  },
] as const;

export default function HomePage() {
  return (
    <div>
      {/* Hero — full-bleed Show / Chroma */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/chroma-output.png"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(7,8,13,0.92) 0%, rgba(7,8,13,0.72) 42%, rgba(7,8,13,0.35) 70%, rgba(7,8,13,0.55) 100%), radial-gradient(ellipse 60% 50% at 70% 40%, rgba(184,240,0,0.18), transparent 55%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo-StageTime-Pilot.png"
            alt="StageTime-Pilot by Tasty-World"
            className="h-16 w-auto rounded-xl bg-[#f4f6f8] px-3 py-2 sm:h-24"
          />
          <h1 className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            Redezeit. Klar. Bühne.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#d9d0c2]">
            Kostenlose Redezeituhr mit Show/PGM, Chroma-Key, NDI und WLAN-Remote
            auf iPad &amp; iPhone.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/download"
              className="rounded-full bg-amber px-6 py-3 text-sm font-bold text-bg0 hover:brightness-110"
            >
              Kostenlos downloaden
            </Link>
            <Link
              href="#remote"
              className="rounded-full border border-white/25 bg-black/25 px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm hover:border-amber/50"
            >
              Remote ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* WLAN Remote — Devices */}
      <section
        id="remote"
        className="relative scroll-mt-20 overflow-hidden border-b border-line"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 20%, rgba(245,185,66,0.12), transparent 55%), linear-gradient(180deg, #10121a 0%, #07080d 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-key">
              WLAN Remote
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Timer auf dem iPad — du bleibst in der Regie.
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              Dieselbe WLAN-Adresse im Safari öffnen: Live-Sync per WebSocket.
              Ideal für Moderatoren, Bühnenhilfe und Side-Stage — plus HTTP-API
              für Cue-Pilot und Companion.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#cfc6b8]">
              <li>· Browser-Remote ohne Extra-App</li>
              <li>· iPad &amp; iPhone im gleichen Netz</li>
              <li>· Port &amp; optionaler Token in den Einstellungen</li>
            </ul>
          </div>
          <RemoteDeviceShowcase />
        </div>
      </section>

      {/* Feature spotlights with parallax images */}
      <section id="features" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
            Funktionen
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
            Alles für Redezeiten — sichtbar und sendefähig.
          </h2>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-5 py-14 sm:gap-28 sm:py-20">
          {spotlights.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                s.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-key">
                  {s.kicker}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{s.body}</p>
              </div>
              <ParallaxMedia className="rounded-2xl border border-line bg-bg1 shadow-[0_30px_70px_-36px_rgba(0,0,0,0.9)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.alt} className="h-auto w-full" />
              </ParallaxMedia>
            </article>
          ))}

          {/* Nachricht */}
          <article
            id="nachricht"
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-key">
                Nachricht / Hinweis
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Text auf die Stage — ohne Funkspruch.
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Kurzhinweise auf Show, PGM und Remote einblenden. Optional
                prominent — wenn der Redner wirklich zum Schluss kommen soll.
              </p>
            </div>
            <ParallaxMedia speed={0.22}>
              <MessageChromaMock />
            </ParallaxMedia>
          </article>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-line bg-bg1/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink sm:text-3xl">
            Hell, dunkel, Key — ein Tool.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Operator-UI im Hell- oder Dunkelmodus, Show-Ausgabe mit Chroma oder
            Schwarz.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/screenshots/timer-dark.png",
                alt: "Timer-Ansicht im Dunkelmodus",
              },
              {
                src: "/screenshots/timer-light.png",
                alt: "Timer-Ansicht im Hellmodus",
              },
              {
                src: "/screenshots/remote.png",
                alt: "Remote-Einstellungen mit WLAN-URL",
              },
            ].map((shot) => (
              <ParallaxMedia
                key={shot.src}
                speed={0.18}
                className="rounded-xl border border-line bg-bg0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={shot.alt} className="h-auto w-full" />
              </ParallaxMedia>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(184,240,0,0.1), transparent 50%), radial-gradient(ellipse 60% 70% at 90% 40%, rgba(245,185,66,0.14), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
            Bereit für die nächste Redezeit?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Kostenlos. Kein Abo. macOS jetzt laden — Windows folgt.
          </p>
          <Link
            href="/download"
            className="mt-8 inline-flex rounded-full bg-amber px-6 py-3 text-sm font-bold text-bg0 hover:brightness-110"
          >
            Zum Download
          </Link>
        </div>
      </section>
    </div>
  );
}
