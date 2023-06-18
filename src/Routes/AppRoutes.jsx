import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Marvel } from "../page/Marvel";
import { RouteProtected } from "../components/layout/RouteProtected";
import { Series } from "../page/Series";
import { Comics } from "../page/Comics";
import { Videogames } from "../page/Videogames";
import { Movies } from "../page/Movies";
import { Characters } from "../page/Characters";
import { Events } from "../page/Events";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/marvel" element={<RouteProtected />}>
        <Route index element={<Marvel />} />
        <Route path="series" element={<Series />} />
        <Route path="comics" element={<Comics />} />
        <Route path="videogames" element={<Videogames />} />
        <Route path="movies" element={<Movies />} />
        <Route path="characters" element={<Characters />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
