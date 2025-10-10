import React from "react";
import logoImage from "../assets/logo.png";
import { NavLink } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { AiFillAppstore } from "react-icons/ai";
const Nav2 = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto border-none">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
              <NavLink to="/installation">
                <p>Installation</p>
              </NavLink>
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        {/* company logo here */}
        <NavLink to="/" className="flex items-center">
          <img
            className="max-w-12
                   "
            src={logoImage}
            alt="logo.png"
          />
          <h1 className="md:text-2xl font-bold text-purple-700 w-[250px] ">
            My App Solution 360
          </h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-xl gap-3">
          {/* pages link  */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:border-b-2 border-purple-700  ${
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
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
    </div>
  );
};

export default Nav2;
