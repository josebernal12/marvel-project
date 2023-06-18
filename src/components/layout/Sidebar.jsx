import { Outlet, Link } from "react-router-dom";
import { Header } from "./Header";

export const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar-bg shadow">
          <div className="w-100 d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="nav-link fs-1 mx-auto mb-5 py-2">
              Marvel
            </a>
            <ul
              className=" d-flex flex-column mx-auto gap-5 w-100 py-5"
              id="menu"
            >
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="series"
                >
                  Series
                </Link>
              </li>
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="#"
                >
                  Comics
                </Link>
              </li>
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="#"
                >
                  VideoGames
                </Link>
              </li>
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="#"
                >
                  Movies
                </Link>
              </li>
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="#"
                >
                  Characters
                </Link>
              </li>
              <li className=" nav-item d-flex align-items-center mt-3 seleccionar w-100 link-hover">
                <Link
                  className="w-100 text-center nav-link text-white  text-uppercase fw-bold fs-3 m-0 py-2"
                  to="#"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <Header />
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
