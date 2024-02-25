import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to={'/'}>
        <span>HOME</span>
      </NavLink>

      <NavLink to={'/about'}>
        <span>ABOUT</span>
      </NavLink>

      <NavLink to={'/post'}>
        <span>POST</span>
      </NavLink>

      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default Navbar