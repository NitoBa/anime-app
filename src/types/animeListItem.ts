import { AnimeTitle } from "./animeTitle";

export type AnimeList = {
  results: AnimeListItem[];
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
};

export type AnimeListItem = {
  id: string;
  title: AnimeTitle;
  image: string;
};
