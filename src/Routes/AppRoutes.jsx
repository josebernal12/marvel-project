import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
