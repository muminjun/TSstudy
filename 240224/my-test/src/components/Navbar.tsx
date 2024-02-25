import { NavLink, Outlet } from "react-router-dom";

function Navbar () {
  return (
    <>
      <nav>
        <NavLink to={"/"}>
          <span>홈</span>
        </NavLink>

        <NavLink to={"/about"}>
          <span>About</span>
        </NavLink>

        <NavLink to={"/test"}>
          <span>Test</span>
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar