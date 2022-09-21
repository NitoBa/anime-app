import { useSearchPopularAnimes } from "../../hooks/useSearchPopularAnimes";

export function PopularAnimeSection() {
  const { data, isLoading, error } = useSearchPopularAnimes();

  if (isLoading) {
    return (
      <div className="h-auto rounded-xl animate-pulse bg-foreground/30 w-[40rem]" />
    );
  }

  return (
    <div className="flex flex-col w-[37rem] gap-[3.2rem] sticky top-0">
      <h3 className="text-[3.2rem] font-semibold">Popular Anime</h3>
      <div className="grid grid-cols-2 gap-y-[2.8rem] gap-x-[3rem]">
        {data?.map((popularAnime) => (
          <div className="h-[23rem] w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-80">
            <img
              className="object-cover h-full w-full"
              src={popularAnime.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
