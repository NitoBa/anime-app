import { useParams } from "react-router-dom";
import { AnimeBioSection } from "../components/AnimeBio";
import { PopularAnimeSection } from "../components/PopularAnimeSection";
import { VideoSection } from "../components/VideoSection";
import { useWatchAnime } from "../hooks/useWatchAnime";

export function WatchPage() {
  const { animeId, episodeNumber, episodeId } = useParams();

  console.log({ animeId, episodeNumber });

  const { data, isLoading, error } = useWatchAnime({
    episodeNumber: Number(episodeNumber) ?? 1,
    animeId: animeId ?? "",
    episodeId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex my-[4rem] justify-between">
      <div className="flex flex-col gap-[4rem]">
        <VideoSection
          title={`${data?.title.romaji} - Episode ${episodeNumber}`}
          videoUrl={data?.episode.episodeUrl ?? ""}
        />
        <AnimeBioSection
          type={"undefined"}
          genres={data?.animeData.genres!}
          releaseDate={data?.animeData.releaseDate!}
          status={data?.animeData.status!}
          image={data?.episode.image ?? data?.image}
          description={data?.description}
        />
      </div>
      <PopularAnimeSection />
    </div>
  );
}
