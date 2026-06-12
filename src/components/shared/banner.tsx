export function Banner() {
  return (
    <div
      className="relative z-[1] flex items-center justify-center gap-3 border-b border-white/70 bg-[linear-gradient(108deg,rgba(255,209,138,.86),rgba(255,180,214,.86),rgba(167,139,250,.86))] px-8 py-[9px] text-[13px] font-semibold text-[#2c1f58] shadow-[0_10px_30px_rgba(167,139,250,.18)]"
      role="banner"
    >
      <span>📚 Summer sale — books up to 50% off this week.</span>
      <a className="font-bold text-[#4c1d95] underline underline-offset-2" href="#">
        Browse deals →
      </a>
    </div>
  )
}
