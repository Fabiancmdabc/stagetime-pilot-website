import { NextResponse } from "next/server";
import { releases } from "@/lib/releases";

export async function GET() {
  return NextResponse.json(
    {
      name: "StageTime-Pilot",
      version: releases.version,
      releasedAt: releases.releasedAt,
      notes: releases.notes,
      downloads: {
        mac: releases.mac || null,
        win: releases.win || null,
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
