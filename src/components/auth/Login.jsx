export const Login = () => {
  return (
    <div className="bg-white shadow rounded width-login mx-auto p-5   d-flex flex-column justify-content-center  ">
      <form className="d-flex flex-column">
        <div>
          <label htmlFor="email" className="form-label fs-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Write your Name"
            className="form-control py-3 fs-5 "
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="form-label fs-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Write your password"
            className="form-control py-3 fs-5 "
          />
        </div>
        <input
          type="submit"
          className="btn btn-danger mt-3 text-uppercase fs-3 "
          value="Login"
        />
      </form>
    </div>
  );
};
