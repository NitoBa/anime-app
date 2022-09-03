import { DefaultUi, Player, Hls } from "@vime/react";
import "@vime/core/themes/default.css";

type VideoProps = {
  title: string;
  videoUrl: string;
};

export function VideoSection({ title, videoUrl }: VideoProps) {
  const hlsConfig = {
    maxLoadingDelay: 4,
    minAutoBitrate: 0,
    lowLatencyMode: true,
  };
  return (
    <div className="flex flex-col gap-[3.2rem] w-fit">
      <h1 className="font-semibold text-[3.2rem]">{title}</h1>
      <div className="h-full w-[77rem] aspect-video">
        <Player>
          <Hls version="latest" config={hlsConfig}>
            <source data-src={videoUrl} type="application/x-mpegURL" />
          </Hls>
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
}
