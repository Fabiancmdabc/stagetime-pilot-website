/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.1";

export const releases = {
  version: "1.0.1",
  releasedAt: "2026-10-02",
  notes:
    "1.0.1: deutlich kleinere Builds (macOS ~244 MB installiert / ~87 MB DMG). Packaging-Bug behoben.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.1-arm64.dmg`,
  win: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.1-Setup.exe`,
  updateUrl: "/api/version",
} as const;
