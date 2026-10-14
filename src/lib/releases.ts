/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/tasty-world-downloads/releases/download/stagetime-v1.0.3";

export const releases = {
  version: "1.0.3",
  releasedAt: "2026-10-14",
  notes:
    "1.0.3: Update-Banner, klareres Icon, Fenster-Chrome/Outputs-Fixes, Nachrichten-Blink & Zeichenlimit.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.3-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.3/StageTime-Pilot-1.0.3-Setup.exe",
  updateUrl: "/api/version",
} as const;
