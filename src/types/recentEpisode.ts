import { AnimeTitle } from "./animeTitle";

export type RecentEpisode = {
    id: string;
    title: AnimeTitle
    image: string;
    episodeId: string;
    episodeNumber: number;
}