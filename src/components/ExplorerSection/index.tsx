import { Link } from "react-router-dom";
import { useSearchRandomAnime } from "../../hooks/useSearchRandomAnime";

export function ExplorerSection() {
  const { data: randomAnime, isLoading } = useSearchRandomAnime();

  return (
    <section className="flex flex-col gap-[2.4rem] w-full">
      <header className="flex flex-col gap-[0.8rem]">
        <h2 className="text-white font-semibold text-[3.6rem]">Explorer</h2>
        <span className="text-foreground text-[2.2rem] leading-[2.4rem]">
          What are you gonna watch today ?
        </span>
      </header>

      {isLoading ? (
        <div className="h-[40rem] w-full rounded-xl animate-pulse bg-foreground" />
      ) : (
        <Link to={`/watch/${randomAnime?.id}`}>
          <main className="h-[40rem] w-full relative group cursor-pointer overflow-hidden rounded-xl">
            <img
              src={randomAnime?.cover}
              alt="cover"
              className="object-cover h-full w-full rounded-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="bg-gradient-to-l from-[#1D1d1d00] to-[#1D1d1dcc] absolute z-10 h-full w-full top-0 left-0" />
            <div className="absolute z-20 bottom-0 w-[55rem] p-[4rem]">
              <h3 className="text-white font-semibold text-[3.6rem] leading-[4.4rem]">
                {randomAnime?.title.romaji ??
                  randomAnime?.title.english ??
                  randomAnime?.title.native}
              </h3>
              <p className="text-white leading-[2.4rem] line-clamp-3">
                {randomAnime?.description}
              </p>
            </div>
          </main>
        </Link>
      )}
    </section>
  );
}
