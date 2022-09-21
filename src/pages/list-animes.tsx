import { AnimeCardList } from "../components/AnimeCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useListAnimes } from "../hooks/useGetListAnimes";

export function ListAnimesPage() {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useListAnimes();

  if (isLoading) {
    return (
      <div className="h-[70rem] w-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[2.4rem] my-[2.4rem]">
      <header className="flex flex-col gap-[0.8rem] ">
        <h2 className="text-white font-semibold text-[3.6rem]">
          Explore Animes
        </h2>
        <span className="text-foreground text-[2.2rem] leading-[2.4rem]">
          What are you gonna watch today ?
        </span>
      </header>
      <div className="grid grid-cols-3 gap-x-[2.4rem] gap-y-[3.2rem] mt-[2.4rem]">
        {data?.pages?.map((page) =>
          page.results.map((anime) => (
            <AnimeCardList key={anime.id} anime={anime} />
          ))
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="flex
          self-center
        items-center
        justify-center
        gap-[0.8rem]
        transition-all
        duration-300
        outline-none
        px-[1.6rem]
        py-[0.8rem]
        w-fit
        rounded-xl
        ring-0
        ring-foreground
        text-[1.4rem]
        hover:ring-1"
        >
          show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFFFFF"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="#FFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="#FFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
