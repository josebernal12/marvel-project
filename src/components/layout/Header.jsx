export const Header = () => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <p className="m-0 text-white fs-3">Name: Jose</p>
      <form className="d-flex gap-3">
        <input type="text" className="form-control px-5 " />
        <input
          type="submit"
          className="btn btn-outline-primary px-4 text-uppercase py-3 header-search"
          value="search"
        />
      </form>
      <button type="submit" className="btn btn-outline-danger px-4 text-uppercase py-3">Logout</button>
    </div>
  );
};
