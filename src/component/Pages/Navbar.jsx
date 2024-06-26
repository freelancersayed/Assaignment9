import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { MdHelpOutline, MdFeedback, MdOutlineSupervisorAccount } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
// import '/style.css'
import "../../index.css";

const Navbar = () => {
  const { user, logOut, loader } = useContext(AuthContext);


//   if(loader){
//     return <div className="min-h-screen  flex items-center justify-center text-7xl"><span className="loading loading-spinner loading-lg"></span></div>
// }

  const handleSignOut = () => {
    logOut().then().catch();
  };


  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/estate">Estate</NavLink>
      </li>
      <li>
        <NavLink to="/self">Contact</NavLink>
      </li>

    
    </>
  );
  const NavUser = (
    <>
      {user ? (
        <p>
          <Link
            className=" flex items-center gap-2"
            onClick={handleSignOut}
            to="/login"
          >
            <IoIosLogOut className="text-2xl" /> Log Out
          </Link>
        </p>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="mb-">
      <div className="navbar bg-gray-800 fixed z-10 mx-auto">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <div data-aos="fade-left">
          <a className="lg:text-2xl text-xl font-bold hover:translate-x-10 "  >
            Crestview <span className="text-orange-400 lg:text-3xl text-xl">Estates</span>
          </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 flex flex-col">
            {user ? (
              <></>
            ) : (
              <div className="flex items-center gap-0">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <span className="-ml-3">/</span>
                <li className="-ml-3">
                  <Link to="/register">Register</Link>
                </li>
                <Link to="/login">
                  <CgProfile className="text-3xl" />{" "}
                </Link>
              </div>
            )}
            {user ? (
              <>
                <div className="dropdown dropdown-hover dropdown-end ">
                  <div tabIndex={0} role="button" className="">
                    <img
                      className="rounded-full w-10 h-10  border-gray-400 relative"
                      src={user.photoURL}
                      alt=""
                    />
                    <FaAngleDown className="flex -mt-3 ml-7 bg-gray-700 rounded-full absolute" />{" "}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 -ml-[20px] rounded w-[285px] py-4 flex border-b border-orange-300"
                  >
                    <h1 className=" shadow-white mb-4 ">
                      <Link
                        to="/profile"
                        className="text-xl font-bold w-full flex items-center"
                      >
                        {" "}
                        <img
                          className="rounded-full mr-2 w-10 h-10 border- border-gray-400 items-center"
                          src={user.photoURL}
                          alt=""
                        />{" "}
                        {user.displayName} <FaAngleDown />
                      </Link>
                    </h1>
                    <hr className=" border-gray-700" />

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/login">
                        <p className="flex gap-2">
                          {" "}
                          <MdOutlineSupervisorAccount className="text-2xl" />
                          Add account
                        </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/register">
                        <p className="flex gap-2">
                          {" "}
                          <RxUpdate className="text-2xl" />
                          Update Profile
                        </p>
                      </Link>{" "}
                    </li>

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/setting">
                        <p className="flex gap-2">
                          {" "}
                          <IoSettingsOutline className="text-2xl" />
                          Settings & privacy
                        </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link className="flex" to="*">
                      <MdHelpOutline className="text-2xl" />
                        <p>
                         
                          Help & support{" "}
                        </p>
                      </Link>
                    </li>

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link className="flex" to="*">
                        <MdFeedback className="text-2xl " />
                        <p> Give Feedback </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                      {" "}
                      <p> {NavUser}</p>
                    </li>

                    <p className="my-4">
                      <a className="hover:underline" href="#">
                        Privacy
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Terms
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Advertising
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Ad Choices
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Cookies
                      </a>{" "}
                      · ·{" "}
                      <a className="hover:underline" href="#">
                        Sayed © 2024
                      </a>
                    </p>
                  </ul>
                </div>
              </>
            ) : (
              <Link></Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
