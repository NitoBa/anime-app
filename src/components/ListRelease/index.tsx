import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { useSearchRecentEpisodes } from "../../hooks/useSearchRecentEpisodes";
export function ListRelease() {
  const { data: recentEpisodes, isLoading } = useSearchRecentEpisodes();

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <h4 className="font-semibold text-[3.6rem]">Recent Episodes</h4>

      {isLoading ? (
        <div className="h-[28.4rem] w-full rounded-xl animate-pulse bg-foreground" />
      ) : (
        <Splide
          className="flex gap-[3rem] items-center justify-center w-full"
          options={{
            arrows: false,
            rewind: true,
            gap: "3rem",
            perPage: 6,
          }}
        >
          {recentEpisodes?.map((episode) => (
            <SplideSlide
              key={episode.id}
              className="h-[28.4rem] w-[17rem] flex flex-col gap-[.8rem] items-center flex-shrink-0 transition-all duration-300 hover:brightness-110 cursor-pointer"
            >
              <Link to={`/watch/${episode.episodeId}`}>
                <div className="h-[25.3rem] w-full relative flex flex-col items-center">
                  <img
                    src={episode.image}
                    alt=""
                    className="rounded-xl w-full h-full object-cover"
                  />
                  <div className="flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#0F1E29] absolute h-full w-full rounded-xl pb-[1.2rem]">
                    <span className="">Episode {episode.episodeNumber}</span>
                  </div>
                </div>
                <strong className="font-semibold text-center">
                  {episode?.title.romaji ??
                    episode?.title.english ??
                    episode?.title.native}
                </strong>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}
