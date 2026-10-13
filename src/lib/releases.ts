/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/tasty-world-downloads/releases/download/stagetime-v1.0.2";

export const releases = {
  version: "1.0.2",
  releasedAt: "2026-10-13",
  notes:
    "1.0.2: Notarisierter Developer-ID-Build (Apple Silicon). Oberfläche DE/EN.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.2-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.2/StageTime-Pilot-1.0.2-Setup.exe",
  updateUrl: "/api/version",
} as const;
