import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <div className="d-flex flex-column  align-items-center justify-content-center">
      <h1 className="text-danger header text-center fw-bold">Marvel</h1>

      <Outlet />
    </div>
  );
};
