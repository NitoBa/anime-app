import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SearchAnimeListResults } from "../SearchAnimeListResults";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="max-w-[117rem] mx-auto">
        <Outlet />
        {/* <SearchAnimeListResults /> */}
      </div>
    </>
  );
}
