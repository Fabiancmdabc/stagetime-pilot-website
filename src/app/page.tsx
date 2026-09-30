import type { Metadata } from "next";
import Link from "next/link";
import { HeroTimer } from "../components/HeroTimer";
import { MessageChromaMock } from "../components/MessageChromaMock";
import { ParallaxMedia } from "../components/ParallaxMedia";
import { RemoteDeviceShowcase } from "../components/RemoteDeviceShowcase";
import { Reveal } from "../components/Reveal";
import { BrandLogo } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "StageTime-Pilot — Redezeit. Klar. Bühne.",
  description:
    "Kostenlose Redezeituhr für Events: Countdown, Chroma-Key, NDI und WLAN-Remote auf iPad & iPhone — by Tasty-World.",
};

const spotlights = [
  {
    id: "ndi",
    kicker: "NDI · RTMP · UDP",
    title: "Ohne Kabel in die Regie.",
    body: "NDI-Quelle „StageTime-Pilot“, RTMP oder MPEG-TS/UDP — die Show kommt übers Netz in vMix oder OBS.",
    image: "/screenshots/settings-ndi.png",
    alt: "Einstellungen mit NDI-, RTMP- und UDP-Ausgaben",
    reverse: false,
  },
  {
    id: "look",
    kicker: "Look",
    title: "Optik für die Bühne, nicht fürs Dashboard.",
    body: "Schriftgröße, Farben, Gelb/Rot-Schwellen, Ausrichtung — und eine Live-PGM-Vorschau 1:1.",
    image: "/screenshots/look-dark.png",
    alt: "Look-Tab mit Farben und PGM-Vorschau",
    reverse: true,
  },
  {
    id: "chroma",
    kicker: "Chroma-Key",
    title: "Greenscreen nur wenn du ihn brauchst.",
    body: "Key-Grün, Bluescreen oder Magenta für vMix und OBS — Key raus, nur die Zeit bleibt als Overlay.",
    image: "/screenshots/look-chroma.jpg",
    alt: "Look mit Key-Grün und PGM-Vorschau",
    reverse: false,
  },
] as const;

export default function HomePage() {
  return (
    <div>
      {/* Hero — dunkel, scharfer CSS-Timer, kein Bitmap-Greenscreen */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 animate-drift"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 42%, rgba(245,185,66,0.16), transparent 58%), radial-gradient(ellipse 50% 40% at 12% 80%, rgba(184,240,0,0.06), transparent 55%), linear-gradient(160deg, #10121a 0%, #07080d 55%, #0c0e14 100%)",
          }}
        />
        <HeroTimer startSeconds={5 * 60} />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
          <Reveal>
            <BrandLogo variant="hero" priority />
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
              Redezeit. Klar. Bühne.
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#d9d0c2]">
              Kostenlose Redezeituhr mit Show/PGM, Chroma-Key, NDI und WLAN-Remote
              auf iPad &amp; iPhone.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
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
          </Reveal>
        </div>
      </section>

      <section
        id="remote"
        className="relative scroll-mt-20 overflow-hidden border-b border-line"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 20%, rgba(245,185,66,0.1), transparent 55%), linear-gradient(180deg, #10121a 0%, #07080d 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <Reveal>
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
          </Reveal>
          <Reveal delayMs={120}>
            <RemoteDeviceShowcase />
          </Reveal>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
              Funktionen
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
              Alles für Redezeiten — sichtbar und sendefähig.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-5 py-14 sm:gap-28 sm:px-8 sm:py-20">
          {spotlights.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                s.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal delayMs={40}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-key">
                  {s.kicker}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{s.body}</p>
              </Reveal>
              <Reveal delayMs={100}>
                <ParallaxMedia speed={0.16 + i * 0.03}>
                  <div className="shot-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.alt} />
                  </div>
                </ParallaxMedia>
              </Reveal>
            </article>
          ))}

          <article
            id="nachricht"
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <Reveal>
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
            </Reveal>
            <Reveal delayMs={100}>
              <ParallaxMedia speed={0.2}>
                <MessageChromaMock />
              </ParallaxMedia>
            </Reveal>
          </article>
        </div>
      </section>

      <section className="border-b border-line bg-bg1/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink sm:text-3xl">
              Hell &amp; dunkel — ein Tool.
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Operator-UI für Tageslicht oder dunkle Regie, Remote und Ausgaben
              im gleichen Workflow.
            </p>
          </Reveal>
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
            ].map((shot, i) => (
              <Reveal key={shot.src} delayMs={i * 70}>
                <ParallaxMedia speed={0.12}>
                  <div className="shot-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.alt} />
                  </div>
                </ParallaxMedia>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-drift"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(184,240,0,0.08), transparent 50%), radial-gradient(ellipse 60% 70% at 90% 40%, rgba(245,185,66,0.12), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
