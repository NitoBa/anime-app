import { useCallback } from "react";
import { useQuery } from "react-query";
import { api } from "../../lib/axios/api";
import { RecentEpisode } from "../../types/recentEpisode";
import { CacheQueriesKeys } from "../../utils/cacheQueriesKeys";

export function useSearchRecentEpisodes() {
  const getRandomAnime = useCallback(async () => {
    const { data } = await api.get("/recent-episodes");
    return data.results as RecentEpisode[];
  }, []);

  const { data, isLoading, error } = useQuery(
    [CacheQueriesKeys.SEARCH_RECENT_EPISODIES],
    getRandomAnime
  );

  return { data, isLoading, error };
}
