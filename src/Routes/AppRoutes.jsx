import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Marvel } from "../page/Marvel";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/marvel" element={<Marvel/>}/>
    </Routes>
  );
}

export default AppRoutes;
