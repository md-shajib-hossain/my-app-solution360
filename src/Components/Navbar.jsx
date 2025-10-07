import React from "react";
import logoImage from "../assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <section className=" py-4">
        <div className="max-w-[1200px] mx-auto flex justify-between ">
          <div className="flex">
            <NavLink to="/" className="flex items-center">
              <img
                className="max-w-12
            "
                src={logoImage}
                alt="logo.png"
              />
              <h1>HERO.IO</h1>
            </NavLink>
          </div>
          <div className="flex items-center gap-5">
            <NavLink to="#">
              <p>Home</p>
            </NavLink>
            <NavLink to="#">
              <p>Apps</p>
            </NavLink>
            <NavLink to="#">
              <p>Installation</p>
            </NavLink>
          </div>
          <button className="py-2 hover:cursor-pointer px-3 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            contribute
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
