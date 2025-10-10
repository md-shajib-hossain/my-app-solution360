import React from "react";
import logoImage from "../assets/logo.png";
import { NavLink } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { AiFillAppstore } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <section className=" py-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center md:justify-between md:flex-row ">
          <div className="flex">
            <NavLink to="/" className="flex items-center">
              <img
                className="max-w-12
            "
                src={logoImage}
                alt="logo.png"
              />
              <h1 className="text-xl font-bold text-purple-700">
                My App Solution 360
              </h1>
            </NavLink>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:border-b-2 border-purple-700 ${
                  isActive
                    ? "text-purple-700 border-b-2 border-purple-700 font-semibold"
                    : "text-black"
                }`
              }
            >
              <div className="flex items-center gap-1">
                <span>
                  <ImHome />
                </span>
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink
              to="/allapps"
              className={({ isActive }) =>
                `hover:border-b-2 border-purple-700 ${
                  isActive
                    ? "text-purple-700 border-b-2 border-purple-700 font-semibold"
                    : "text-black"
                }`
              }
            >
              <div className="flex items-center gap-1">
                <span>
                  <AiFillAppstore />
                </span>
                <p>App</p>
              </div>
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `hover:border-b-2 border-purple-700 ${
                  isActive
                    ? "text-purple-700 border-b-2 border-purple-700 font-semibold"
                    : "text-black"
                }`
              }
            >
              <div className="flex items-center gap-1">
                <AiOutlineDownload />
                <p>Installation</p>
              </div>
            </NavLink>
          </div>

          <NavLink to="https://github.com/md-shajib-hossain">
            <button className="py-2 hover:cursor-pointer px-3 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              <div className="flex items-center gap-1 ">
                {" "}
                <span>
                  <ImGithub />
                </span>
                contribute
              </div>
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;
