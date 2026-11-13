/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/tasty-world-downloads/releases/download/stagetime-v1.0.8";

export const releases = {
  version: "1.0.8",
  releasedAt: "2026-11-13",
  notes:
    "1.0.8: Remote-Server startet zuverlässig (LocalStorage/Start-Race), klarer Start-Button, QR-Codes.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.8-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.6/StageTime-Pilot-1.0.6-Setup.exe",
  updateUrl: "/api/version",
} as const;
