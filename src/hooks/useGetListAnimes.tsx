import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { useCallback } from "react";
import { api } from "../lib/axios/api";
import { AnimeList } from "../types/animeListItem";
import { CacheQueriesKeys } from "../utils/cacheQueriesKeys";

type Props = {
  options?: UseInfiniteQueryOptions<AnimeList>;
};

export function useListAnimes(options?: Props) {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery<AnimeList>(
      [CacheQueriesKeys.GET_LIST_ANIMES],
      ({ pageParam }) =>
        api
          .get("/advanced-search", { params: { page: pageParam } })
          .then((response) => response.data as AnimeList),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.hasNextPage) {
            return lastPage.currentPage + 1;
          }

          return lastPage ?? 0;
        },
        ...options,
      }
    );

  return { data, isLoading, error, hasNextPage, fetchNextPage };
}
