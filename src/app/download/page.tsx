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
            DMG für Apple Silicon (M1–M4). Beim ersten Start ggf. Rechtsklick →
            Öffnen (noch nicht notarisiert).
          </p>
          {releases.mac ? (
            <a
              href={releases.mac}
              className="mt-5 inline-flex rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
            >
              macOS laden (.dmg)
            </a>
          ) : (
            <p className="mt-5 text-sm text-muted">macOS-Build folgt.</p>
          )}
        </div>
        <div className="rounded-xl border border-line bg-bg1 p-5">
          <h2 className="font-semibold text-ink">Windows</h2>
          <p className="mt-2 text-sm text-muted">NSIS-Installer (.exe).</p>
          {releases.win ? (
            <a
              href={releases.win}
              className="mt-5 inline-flex rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
            >
              Windows laden
            </a>
          ) : (
            <p className="mt-5 text-sm text-muted">
              Windows-Installer folgt in Kürze.
            </p>
          )}
        </div>
      </div>

      {releases.notes ? (
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          Release-Notes: {releases.notes}
        </p>
      ) : null}

      <p className="mt-6 text-sm text-muted">
        <Link href="/" className="text-teal hover:underline">
          Zurück zur Startseite
        </Link>
      </p>
    </div>
  );
}
