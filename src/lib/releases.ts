/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.1";

export const releases = {
  version: "1.0.1",
  releasedAt: "2026-10-02",
  notes:
    "1.0.1: deutlich kleinere macOS-App (~244 MB statt ~620 MB). Windows folgt im gleichen Release-Stil.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.1-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.0/StageTime-Pilot-1.0.0-Setup.exe",
  updateUrl: "/api/version",
} as const;
