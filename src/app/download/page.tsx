import type { Metadata } from "next";
import Link from "next/link";
import { releases } from "@/lib/releases";

export const metadata: Metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink">
        Download
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        StageTime-Pilot ist kostenlos. Version {releases.version}
        {releases.releasedAt ? ` · ${releases.releasedAt}` : ""} — kein Abo, keine
        Seat-Lizenz.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-bg1 p-5">
          <h2 className="font-semibold text-ink">macOS</h2>
          <p className="mt-2 text-sm text-muted">
            DMG für Apple Silicon (M1–M4), ca. 220&nbsp;MB (Electron-Runtime).
            Noch nicht von Apple notarisiert.
          </p>
          {releases.mac ? (
            <a
              href={releases.mac}
              className="mt-5 inline-flex rounded-full bg-amber px-4 py-2 text-sm font-bold text-bg0 hover:brightness-110"
            >
              macOS laden (.dmg)
            </a>
          ) : (
            <p className="mt-5 text-sm text-muted">macOS-Build folgt.</p>
          )}
        </div>
        <div className="rounded-xl border border-line bg-bg1 p-5">
          <h2 className="font-semibold text-ink">Windows</h2>
          <p className="mt-2 text-sm text-muted">
            NSIS-Installer (.exe) für Windows 10/11, 64-bit. Windows SmartScreen
            kann beim ersten Start warnen (noch nicht code-signiert).
          </p>
          {releases.win ? (
            <a
              href={releases.win}
              className="mt-5 inline-flex rounded-full bg-amber px-4 py-2 text-sm font-bold text-bg0 hover:brightness-110"
            >
              Windows laden (.exe)
            </a>
          ) : (
            <p className="mt-5 text-sm text-muted">
              Windows-Installer folgt in Kürze.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-amber/30 bg-amber-dim p-5">
        <h2 className="font-semibold text-ink">
          macOS: „App ist beschädigt“ / lässt sich nicht öffnen
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Die App ist in Ordnung — macOS blockiert Downloads ohne Apple-Notarisierung
          und zeigt fälschlich „beschädigt“. Quarantäne einmal entfernen:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>
            App aus dem DMG nach{" "}
            <code className="text-amber">Programme</code> (Applications) ziehen.
          </li>
          <li>
            Terminal öffnen und ausführen:
            <pre className="mt-2 overflow-x-auto rounded-lg border border-line bg-bg0 px-3 py-2 text-xs text-amber">{`xattr -cr /Applications/StageTime-Pilot.app`}</pre>
          </li>
          <li>Danach StageTime-Pilot normal aus Programme starten.</li>
        </ol>
        <p className="mt-3 text-sm text-muted">
          Alternativ: Rechtsklick auf die App →{" "}
          <span className="text-ink">Öffnen</span> → erneut{" "}
          <span className="text-ink">Öffnen</span> (hilft nicht immer bei
          „beschädigt“ — der Terminal-Befehl schon).
        </p>
      </div>

      <p className="mt-8 text-sm text-muted">
        Die Dateigröße kommt von der Electron-Runtime (Chromium) — üblich für
        Desktop-Apps dieser Art, nicht von euren Show-Daten.
      </p>

      {releases.notes ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Release-Notes: {releases.notes}
        </p>
      ) : null}

      <p className="mt-6 text-sm text-muted">
        <Link href="/" className="text-amber hover:underline">
          Zurück zur Startseite
        </Link>
      </p>
    </div>
  );
}
