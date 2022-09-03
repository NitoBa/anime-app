import { useCallback } from "react";
import { useQuery } from "react-query";
import { api } from "../../lib/axios/api";
import { RandomAnime } from "../../types/animes";
import { CacheQueriesKeys } from "../../utils/cacheQueriesKeys";

export function useSearchRandomAnime() {
  const getRandomAnime = useCallback(async () => {
    const { data } = await api.get<RandomAnime>("/random-anime");
    return data;
  }, []);

  const { data, isLoading, error } = useQuery(
    [CacheQueriesKeys.SEARCH_RANDOM_ANIMES],
    getRandomAnime
  );

  return { data, isLoading, error };
}
