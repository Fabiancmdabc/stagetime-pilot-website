/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/tasty-world-downloads/releases/download/stagetime-v1.0.6";

export const releases = {
  version: "1.0.6",
  releasedAt: "2026-10-15",
  notes:
    "1.0.6: PGM ohne Titelstreifen, verschiebbar, Ampeln nur bei Mausbewegung.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.6-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.6/StageTime-Pilot-1.0.6-Setup.exe",
  updateUrl: "/api/version",
} as const;
