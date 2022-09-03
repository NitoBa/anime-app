import {
  BrowserRouter,
  Route,
  Routes as RouterProvider,
} from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { DetailPage } from "./pages/detail";
import { HomePage } from "./pages/home";
export function Routes() {
  return (
    <BrowserRouter>
      <RouterProvider>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </RouterProvider>
    </BrowserRouter>
  );
}
