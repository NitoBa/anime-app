import { AnimeBioSection } from "../components/AnimeBio";
import { PopularAnimeSection } from "../components/PopularAnimeSection";
import { VideoSection } from "../components/VideoSection";

export function WatchPage() {
  return (
    <div className="flex my-[4rem] max-w-[117rem] mx-auto justify-between">
      <div className="flex flex-col gap-[4rem]">
        <VideoSection
          title={"Naruto Clássico - Episode 15"}
          videoUrl={
            "https://www04.gogocdn.stream/videos/hls/QEYFSlnzSprUcMKTBspsvw/1662245159/25098/027e9529af2b06fe7b4f47e507a787eb/ep.15.1645219138.m3u8"
          }
        />
        <AnimeBioSection />
      </div>
      <PopularAnimeSection />
    </div>
  );
}
