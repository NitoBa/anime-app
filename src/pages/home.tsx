import { ExplorerSection } from "../components/ExplorerSection";
import { ListRelease } from "../components/ListRelease";

export function HomePage() {
  return (
    <div className="flex flex-col mt-[4rem] gap-[4rem] max-w-[117rem] mx-auto">
      <ExplorerSection />
      <ListRelease />
    </div>
  );
}
