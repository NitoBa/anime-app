import { useCallback } from "react";
import { useQuery } from "react-query";
import { api } from "../lib/axios/api";
import { PopularAnime } from "../types/popularAnime";
import { CacheQueriesKeys } from "../utils/cacheQueriesKeys";

export function useSearchPopularAnimes() {
  const getRandomAnime = useCallback(async () => {
    const { data } = await api.get("/popular");
    return data.results as PopularAnime[];
  }, []);

  const { data, isLoading, error } = useQuery(
    [CacheQueriesKeys.SEARCH_POPULAR_ANIMES],
    getRandomAnime
  );

  return { data, isLoading, error };
}
