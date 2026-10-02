/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.2";

export const releases = {
  version: "1.0.2",
  releasedAt: "2026-10-02",
  notes:
    "1.0.2: Oberfläche DE/EN mit Sprachumschalter. Kleinere Builds wie in 1.0.1.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.2-arm64.dmg`,
  win: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.2-Setup.exe`,
  updateUrl: "/api/version",
} as const;
