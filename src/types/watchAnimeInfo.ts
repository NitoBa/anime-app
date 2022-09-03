import { AnimeTitle } from "./animeTitle";

export type WatchAnimeInfo = {
    id: string;
    title: AnimeTitle;
    description: string;
    image: string;
    animeData: {
        genres: string[];
        type: string;
        releaseDate: string;
        status: string;
    }
    episode: {
        title: string;
        episodeUrl: string;
        number: number;
        image: string;
    }
}