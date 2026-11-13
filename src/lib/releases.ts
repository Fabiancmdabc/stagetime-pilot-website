/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/tasty-world-downloads/releases/download/stagetime-v1.0.11";

export const releases = {
  version: "1.0.11",
  releasedAt: "2026-11-13",
  notes:
    "1.0.11: Remote-UI vereinfacht — Start/Stop-Button statt Checkbox und Status-Chip, ohne VPN-Warnung.",
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.11-arm64.dmg`,
  win: "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.6/StageTime-Pilot-1.0.6-Setup.exe",
  updateUrl: "/api/version",
} as const;
