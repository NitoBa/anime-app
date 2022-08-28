export function ExplorerSection() {
  return (
    <section className="flex flex-col gap-[2.4rem] w-full">
      <header className="flex flex-col gap-[0.8rem]">
        <h2 className="text-white font-semibold text-[3.6rem]">Explorer</h2>
        <span className="text-foreground text-[2.2rem] leading-[2.4rem]">
          What are you gonna watch today ?
        </span>
      </header>
      <main className="h-[40rem] w-full relative ">
        <img
          src="https://picsum.photos/1000"
          alt="cover"
          className="object-cover h-full w-full rounded-xl bg-gradient-to-r from-[#1D1d1d00] to-[#1D1d1dcc]"
        />
        <div className="absolute bottom-0 w-[55rem] p-[4rem]">
          <h3 className="text-white font-semibold text-[3.6rem] leading-[6.4rem]">
            Weather With You
          </h3>
          <p className="text-white leading-[2.4rem]">
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </p>
        </div>
      </main>
    </section>
  );
}
