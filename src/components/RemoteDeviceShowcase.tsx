import { LiveCountdown } from "./LiveCountdown";

/** Laptop + iPad + iPhone — WLAN-Remote mit laufendem Timer. */
export function RemoteDeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none pb-10 lg:max-w-none lg:pb-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[2.5rem] opacity-90 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 55% 40%, rgba(245,185,66,0.22), transparent 62%)",
        }}
      />

      <div className="relative z-10 overflow-hidden rounded-xl border border-line bg-bg0 shadow-[0_32px_70px_-28px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-bg2 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-2 text-[10px] text-muted">
            StageTime-Pilot · Operator
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/screenshots/timer-dark.png"
          alt="StageTime-Pilot Timer auf dem Rechner"
          className="h-auto w-full"
        />
      </div>

      <div className="absolute -bottom-2 left-0 z-20 hidden w-[46%] rotate-[-7deg] animate-float-soft sm:block lg:left-[-2%]">
        <div className="rounded-[1.25rem] border-[3px] border-[#2c303a] bg-[#0b0c10] p-2 shadow-[0_26px_55px_-14px_rgba(0,0,0,0.95)]">
          <div className="overflow-hidden rounded-[0.9rem] bg-black">
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center bg-black">
              <LiveCountdown
                startSeconds={75}
                className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6.5vw,3.2rem)] font-bold tracking-tight text-amber"
              />
              <span className="mt-2 rounded-full bg-amber/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber">
                Gelb
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2.5 pt-8">
                <p className="text-[10px] font-semibold tracking-wide text-key">
                  WLAN REMOTE
                </p>
                <p className="text-[9px] text-white/75">iPad · Safari · Live</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] font-medium text-muted">iPad</p>
      </div>

      <div className="absolute -bottom-4 right-0 z-30 w-[28%] sm:w-[24%] lg:right-[-1%]">
        <div className="animate-float-soft-delayed rounded-[1.45rem] border-[3px] border-[#2c303a] bg-[#0b0c10] p-[5px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.95)]">
          <div className="relative mx-auto mb-1.5 h-1 w-9 rounded-full bg-white/10" />
          <div className="overflow-hidden rounded-[1.05rem] bg-black">
            <div className="relative flex aspect-[9/19] flex-col items-center justify-center px-2">
              <LiveCountdown
                startSeconds={75}
                className="font-[family-name:var(--font-display)] text-[1.65rem] font-bold text-amber sm:text-[1.85rem]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-2 pb-3 pt-12">
                <div className="rounded-md bg-amber px-2 py-1 text-center text-[8px] font-bold tracking-wide text-bg0">
                  REMOTE
                </div>
                <p className="mt-1.5 text-center text-[8px] leading-tight text-white/75">
                  iPhone · gleiche WLAN-Adresse
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/10" />
        </div>
        <p className="mt-2 text-center text-[10px] font-medium text-muted">iPhone</p>
      </div>
    </div>
  );
}
