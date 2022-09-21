import { RecentEpisode } from "../../types/recentEpisode";

type Props = {
  episode: RecentEpisode;
};

export function RecentEpisodeCard({ episode }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[25.3rem] w-full relative flex flex-col items-center">
        <img
          src={episode.image}
          alt=""
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#0F1E29] absolute h-full w-full rounded-xl pb-[1.2rem]">
          <span className="">Episode {episode.episodeNumber}</span>
        </div>
      </div>
      <strong className="font-semibold text-center w-full">
        {episode?.title.romaji ??
          episode?.title.english ??
          episode?.title.native}
      </strong>
    </div>
  );
}
