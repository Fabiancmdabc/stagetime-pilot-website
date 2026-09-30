/** Chroma-Key Show mit eingeblendeter Hinweis-Nachricht. */
export function MessageChromaMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex aspect-[16/10] flex-col items-center justify-center bg-[#00ff00]">
        <p className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,6.5rem)] font-bold tabular-nums tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.15)]">
          05:00
        </p>
        <div className="absolute inset-x-6 bottom-6 rounded-xl bg-black/75 px-5 py-3 text-center backdrop-blur-sm sm:inset-x-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-amber">
            Nachricht
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
            Bitte zum Schluss kommen
          </p>
        </div>
      </div>
    </div>
  );
}
