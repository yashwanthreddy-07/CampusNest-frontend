import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillGooglePlusCircle,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
function Footer() {
  return (
    <>
      <footer className="hidden py-7 border-t-2 bg-gray-50 border-gray-300 text-[18px] md:flex  justify-center md:gap-20  lg:gap-x-44 ">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-5">
            <Link to="/" className="hover:underline hover:scale-105">
              Home
            </Link>
            <Link to="/policy" className="hover:underline hover:scale-105">
              Privacy
            </Link>
            <div
              onMouseEnter={() =>
                document.getElementById("contact").classList.remove("hidden")
              }
              onMouseLeave={() => {
                document.getElementById("contact").classList.add("hidden");
              }}
            >
              <p className=" cursor-pointer hover:underline hover:scale-105">
                Contact
              </p>
              <div
                id="contact"
                className="hidden absolute max-w-[200px]  bg-gray-200 p-2 text-[16px] text-gray-600 border-2 rounded-md"
              >
                <p>
                  Contact us at : <br />
                  <span className="underline text-dblue hover:cursor-pointer">
                    080-40404040
                  </span>
                </p>
                <p>
                  Mail Us at :{" "}
                  <span className="underline text-dblue hover:cursor-pointer">
                    Campusnest@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <p className="hover:underline hover:scale-105 cursor-pointer">
              Reviews
            </p>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/github"
              className="m-2  hover:scale-125 hover:ring-2 hover:ring-dblue rounded-full shadow-2xl border-gray-400 border-2 "
            >
              <AiFillGithub className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/linkedin"
              className="m-2  hover:scale-125 hover:ring-2 hover:ring-dblue rounded-full shadow-2xl border-gray-400 border-2"
            >
              <TiSocialLinkedin className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/twitter"
              className="m-2  hover:scale-125 hover:ring-2 hover:ring-dblue rounded-full shadow-2xl border-gray-400 border-2"
            >
              <AiFillTwitterCircle className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/instagram"
              className="m-2  hover:scale-125 hover:ring-2 hover:ring-dblue rounded-full shadow-2xl border-gray-400 border-2"
            >
              <AiFillInstagram className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/gmail"
              className="m-2 hover:scale-125 hover:ring-2 hover:ring-dblue rounded-full shadow-2xl border-gray-400 border-2"
            >
              <AiFillGooglePlusCircle className="w-6 h-6" />
            </NavLink>
          </div>
          <div className="hover:scale-105 hover:text-dblue font-medium">
            <p> Copyrights reserved &copy; CampusNest 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-[22px]">
            Sign Up to Our NewsLetter:
          </p>
          <div className="flex gap-3">
            <input
              className="border-gray-600 px-2 py-1 rounded-md border-2 focus:ring-gray-800"
              type="text"
              placeholder="Enter your email"
            />
            <button className="w-24 border-2 border-gray-800 text-center rounded-md text-gray-800 hover:text-dblue  hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
      <div className="md:hidden  flex flex-col  items-center justify-between px-10 py-5  font-medium  text-dblue  bg-gray-50 border-t-2 border-gray-300 ">
        <div className="flex gap-2 items-center">
          <Link to="/" className="hover:underline hover:scale-105">
            Home
          </Link>
          <Link to="/policy" className="hover:underline hover:scale-105">
            Privacy
          </Link>
          <div
            onClick={() => {
              document.getElementById("contactsm").classList.toggle("hidden");
            }}
          >
            <Link className=" cursor-pointer hover:underline hover:scale-105">
              Contact
            </Link>
            <div
              id="contactsm"
              className="hidden -mt-28 ml-[70px] absolute max-w-[200px]  bg-gray-200 p-2 text-[16px] text-gray-600 border-2 rounded-md"
            >
              <p>
                Contact us at : <br />
                <span className="underline text-dblue hover:cursor-pointer">
                  080-40404040
                </span>
              </p>
              <p>
                Mail Us at :{" "}
                <span className="underline text-dblue hover:cursor-pointer">
                  Campusnest@gmail.com
                </span>
              </p>
            </div>
          </div>
          <p className="hover:underline hover:scale-105 cursor-pointer">
            Reviews
          </p>
        </div>
        <p> Copyrights reserved &copy; CampusNest 2024</p>
      </div>
    </>
  );
}

export default Footer;
