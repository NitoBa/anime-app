import { useCallback } from "react";
import { useQuery } from "react-query";
import { api } from "../lib/axios/api";
import { WatchAnimeInfo } from "../types/watchAnimeInfo";
import { CacheQueriesKeys } from "../utils/cacheQueriesKeys";

type Props = {
  animeId: string;
  episodeNumber?: number;
  episodeId?: string;
};

export function useWatchAnime({
  animeId,
  episodeNumber = 1,
  episodeId,
}: Props) {
  const getAnimeInfos = useCallback(async () => {
    let episode: WatchAnimeInfo;
    const { data: animeInfo } = await api.get(`/info/${animeId}`);

    const episodeInfo = animeInfo.episodes.filter(
      (episodeInfo: any) => episodeInfo.id === episodeId
    );

    const { data: watchLinks } = await api.get(`/watch/${episodeId}`);

    episode = {
      id: animeInfo.id,
      title: animeInfo.title,
      description: animeInfo.description,
      image: animeInfo.image,
      animeData: {
        genres: animeInfo.genres,
        releaseDate: animeInfo.releaseDate,
        status: animeInfo.status,
        type: "Anime",
      },
      episode: {
        number: episodeInfo.number,
        image: episodeInfo.image,
        title: episodeInfo.title,
        episodeUrl: watchLinks.sources[0].url,
      },
    };

    return episode;
  }, [animeId]);

  const { data, isLoading, error } = useQuery(
    [CacheQueriesKeys.GET_WATCH_EPISODE],
    getAnimeInfos
  );

  return { data, isLoading, error };
}
