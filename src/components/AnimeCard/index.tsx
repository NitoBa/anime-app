import { AnimeListItem } from "../../types/animeListItem";

export function AnimeCardList({ anime }: { anime: AnimeListItem }) {
  return (
    <div className="flex flex-col items-center gap-[1.6rem] justify-center transition-all duration-300 brightness-90 hover:brightness-100 cursor-pointer">
      <img
        src={anime.image}
        alt=""
        className="rounded-xl object-contain h-[25.3rem] w-full z-10 relative"
      />
      <img
        src={anime.image}
        alt=""
        className="rounded-xl object-cover h-[20rem] w-full blur-sm absolute z-0"
      />
      <strong className="font-semibold w-fit text-center text-[2.4rem] mt-[1.6rem]">
        {anime?.title.romaji ?? anime?.title.english ?? anime?.title.native}
      </strong>
    </div>
  );
}
