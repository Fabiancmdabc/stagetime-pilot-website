/** Öffentliche Release-Metadaten (auch für In-App Update-Check). */
const GITHUB_RELEASE =
  "https://github.com/Fabiancmdabc/StageTime-Pilot/releases/download/v1.0.0";

export const releases = {
  version: "1.0.0",
  releasedAt: "2026-09-30",
  notes:
    "Erste öffentliche Version: Redezeit, Show/PGM, Chroma-Key, NDI/RTMP/UDP, Remote.",
  /** Absolute Download-URLs (GitHub Releases — zu groß für Vercel) */
  mac: `${GITHUB_RELEASE}/StageTime-Pilot-1.0.0-arm64.dmg`,
  win: "" as string,
  updateUrl: "/api/version",
} as const;
