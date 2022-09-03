type AnimeTitleObject = {
    romaji: string,
    english: string,
    native: string
}
export type RandomAnime = {
    id: string;
    title: AnimeTitleObject;
    cover: string;
    description: string;
}