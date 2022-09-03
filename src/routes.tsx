import {
  BrowserRouter,
  Route,
  Routes as RouterProvider,
} from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { WatchPage } from "./pages/watch";
import { HomePage } from "./pages/home";
export function Routes() {
  return (
    <BrowserRouter>
      <RouterProvider>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/watch/:animeId/:episodeNumber/:episodeId"
            element={<WatchPage />}
          />
        </Route>
      </RouterProvider>
    </BrowserRouter>
  );
}
