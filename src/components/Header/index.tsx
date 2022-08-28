export function Header() {
  return (
    <header className="w-ful">
      <div className="px-[8.3rem] pt-[2.4rem] flex items-center justify-between">
        <div className="flex items-center gap-[9rem]">
          <span className="text-[3.6rem] leading-[3.2rem] tracking-[0.07em] font-bold">
            Anonime
          </span>
          <nav className="text-foreground leading-[3.2rem] tracking-[0.07em] text-[1.8rem]">
            <ul className="flex items-center gap-[3.2rem]">
              <li className="hover:text-white cursor-pointer transition-all duration-300">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">
                List anime
              </li>
            </ul>
          </nav>
        </div>

        <input
          type="text"
          placeholder="Search animes...."
          className="
          flex
          items-center
          w-[37.5rem]
          h-[4.8rem]
          px-[1.8rem]
          py-[0.8rem]
          bg-[#374151]
          text-white
          rounded-full
          placeholder:text-foreground
          tracking-[0.07em]
          text-[1.8rem]
          outline-none
          border
          border-transparent
          focus:border-white
          transition-all duration-300
          "
        />
      </div>
    </header>
  );
}
