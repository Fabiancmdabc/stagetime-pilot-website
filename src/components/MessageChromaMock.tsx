/** Show-Hinweis auf dunklem Timer — kein Greenscreen. */
export function MessageChromaMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-black shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex aspect-[16/10] flex-col items-center justify-center">
        <p className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,11vw,6rem)] font-bold tabular-nums tracking-tight text-amber animate-pulse-glow">
          01:00
        </p>
        <div className="message-banner absolute inset-x-6 bottom-6 rounded-xl border border-amber/30 bg-bg1/95 px-5 py-3 text-center backdrop-blur-md sm:inset-x-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-amber">
            Nachricht
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-ink sm:text-xl">
            Bitte zum Schluss kommen
          </p>
        </div>
      </div>
    </div>
  );
}
