import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { useSearchRecentEpisodes } from "../../hooks/useSearchRecentEpisodes";
import { RecentEpisodeCard } from "../RecentEpisodieCard";
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
                <RecentEpisodeCard episode={episode} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}
