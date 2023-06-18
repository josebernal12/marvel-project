import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Marvel } from "../page/Marvel";
import { RouteProtected } from "../components/layout/RouteProtected";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/marvel" element={<RouteProtected />}>
        <Route index element={<Marvel />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
