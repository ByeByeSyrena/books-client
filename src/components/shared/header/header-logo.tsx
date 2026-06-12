export function HeaderLogo() {
  return (
    <a
      href="/"
      aria-label="BookSwap home"
      className="flex shrink-0 items-center gap-1.5 no-underline"
    >
      <img
        src="/src/assets/logo.svg"
        alt=""
        width={60}
        height={60}
      />
      <div className="flex flex-col">
        <span className="font-sans text-[20px] font-extrabold leading-none tracking-[-0.06em] text-[#32146f]">
          BookSwap
        </span>
        <span className="font-[var(--font-cormorant)] text-[12px] font-light italic leading-none tracking-[0.02em] text-[#6f6790]/70">
          Buy, swap, share, connect
        </span>
      </div>
    </a>
  )
}
