import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import campuslogo from "../assets/campusnestlogo.png";
import StudenLogin from "../Auth/StudenLogin";
import OwnerLogin from "../Auth/OwnerLogin";
import OwnerRegistration from "../Auth/OwnerRegistration";
import StudentRegistration from "../Auth/StudentRegistration";

function Header({ setIsLoggedIn }) {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [menu, SetMenu] = useState(false);
  const [support, setSupport] = useState(false);

  const [dialogs, setDialogs] = useState({
    sl: false,
    sr: false,
    ol: false,
    or: false,
  });

  // const dropdownRef = useRef(null);
  const handleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
    setIsOpenSignUp(false);
    setSupport(false);
  };
  const handleSignUp = () => {
    setIsOpenSignUp(!isOpenSignUp);
    setIsOpenSignIn(false);
    setSupport(false);
  };
  const handleSupport = () => {
    setSupport(!support);
    setIsOpenSignUp(false);
    setIsOpenSignIn(false);
  };
  const handlemenu = () => {
    SetMenu(!menu);
  };

  return (
    <>
      <nav className="hidden md:flex bg-gray-50 w-full justify-between items-center px-24 py-3 border-b-2 border-gray-200 transition-all  ease-out sticky top-0 z-10 ">
        <Link
          to="/"
          className="text-[24px] font-semibold font-serif text-dblue"
        >
          CampusNest
        </Link>

        <p className="hidden text-orange-700 text-[20px] lg:inline  font-serif ">
          Experience new way of Finding Homes
        </p>
        <div className="flex items-center  gap-8 text-[18px] font-medium">
          <div className="flex gap-8">
            <div
              onMouseEnter={handleSignIn}
              onMouseLeave={() => setIsOpenSignIn(false)}
            >
              <p className="relative cursor-pointer" id="SignIn">
                SignIn
              </p>
              {isOpenSignIn && (
                <div
                  id="SignIn"
                  className="absolute bg-gray-100 font-normal p-3 flex flex-col items-start gap-2   text-gray-600 border-4 rounded-md hover:scale-105"
                >
                  <button
                    id="studentsignin"
                    className="hover:underline cursor-pointer hover:text-gray-700"
                    onClick={() => {
                      setDialogs((prev) => {
                        return { ...prev, sl: true };
                      });
                    }}
                  >
                    Sign In As Student
                  </button>
                  <p
                    id="ownersignin"
                    className="hover:underline cursor-pointer hover:text-gray-700"
                    onClick={() => {
                      setDialogs((prev) => {
                        return { ...prev, ol: true };
                      });
                    }}
                  >
                    Sign In As Owner
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            onMouseEnter={handleSignUp}
            onMouseLeave={() => setIsOpenSignUp(false)}
          >
            <p className="relative cursor-pointer" id="SignIn">
              Register
            </p>

            {isOpenSignUp && (
              <div
                id="SignIn"
                className="absolute   p-3 flex flex-col bg-gray-100 items-start gap-2  font-normal text-gray-600 border-4 rounded-md hover:scale-105"
              >
                <button
                  id="studentsignup"
                  className="hover:underline cursor-pointer hover:text-gray-700"
                  onClick={() => {
                    setDialogs((prev) => {
                      return { ...prev, sr: true };
                    });
                  }}
                >
                  Register As Student
                </button>
                <button
                  id="ownersignup"
                  className="hover:underline cursor-pointer hover:text-gray-700"
                  onClick={() => {
                    setDialogs((prev) => {
                      return { ...prev, or: true };
                    });
                  }}
                >
                  Register As Owner
                </button>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleSupport}
            onMouseLeave={() => setSupport(false)}
          >
            <span className="material-symbols-outlined cursor-pointer relative text-3xl">
              contact_support
            </span>
            {support && (
              <div className="border-2 rounded-md bg-g  text-gray-600 bg-gray-100 text-[15px] hover:scale-105 text-wrap p-3 max-w-[200px] absolute flex flex-col gap-2 -ml-48">
                <Link to="/policy" className="hover:underline cursor-pointer">
                  Our policy
                </Link>
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
            )}
          </div>
        </div>
      </nav>
      <nav className="sticky z-10 top-0   w-full bg-gray-50 md:hidden  ">
        <div className="px-5 flex justify-between  items-center h-[50px]  border-b-2 border-gray-200">
          <div className="font-bold text-dblue text-[20px]">
            <Link to="/">CampusNest</Link>
          </div>
          <div>
            <span
              onClick={handlemenu}
              className="material-symbols-outlined mr-2 cursor-pointer"
            >
              menu
            </span>
          </div>
        </div>

        <div
          id="menu"
          className={` w-full fixed text-3xl font-medium bg-gray-50 h-full  text-[20px]   flex flex-1 flex-col gap-3  px-10 py-5 text-gray-600 transition-transform duration-700 transform ${
            menu ? "translate-x-0" : "translate-x-[1000px]"
          }`}
        >
          <Link to="/">Home</Link>
          <div className="flex flex-col ">
            <p
              onClick={() => {
                document.getElementById("signin").classList.toggle("hidden");
                document.getElementById("register").classList.add("hidden");
                document.getElementById("support").classList.add("hidden");
              }}
              className="cursor-pointer"
            >
              {" "}
              Sign In
            </p>
            <div id="signin" className="hidden text-[16px] gap-2 ">
              <p
                onClick={() => {
                  setDialogs((prev) => {
                    return { ...prev, sl: true };
                  });
                }}
                className=" hover:cursor-pointer hover:underline"
              >
                Login As Student
              </p>
              <p
                onClick={() => {
                  setDialogs((prev) => {
                    return { ...prev, ol: true };
                  });
                }}
                className="hover:cursor-pointer hover:underline"
              >
                Login As Owner
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p
              onClick={() => {
                document.getElementById("signin").classList.add("hidden");
                document.getElementById("register").classList.toggle("hidden");
                document.getElementById("support").classList.add("hidden");
              }}
              className="cursor-pointer"
            >
              Register
            </p>
            <div id="register" className=" hidden text-[16px]  gap-2">
              <p
                onClick={() => {
                  setDialogs((prev) => {
                    return { ...prev, sr: true };
                  });
                }}
                className="hover:cursor-pointer hover:underline"
              >
                Register As Student
              </p>
              <p
                onClick={() => {
                  setDialogs((prev) => {
                    return { ...prev, or: true };
                  });
                }}
                className="hover:cursor-pointer hover:underline"
              >
                Register As Owner
              </p>
            </div>
          </div>
          <div>
            <p
              onClick={() => {
                document.getElementById("signin").classList.add("hidden");
                document.getElementById("register").classList.add("hidden");
                document.getElementById("support").classList.toggle("hidden");
              }}
              className="cursor-pointer"
            >
              Support
            </p>
            <div id="support" className="hidden  text-[16px]">
              <p>
                Contact us:<span>080-404041040</span>
              </p>
              <p>
                Email us at:<span>campusnest@gmail.com</span>
              </p>
            </div>
          </div>
          <Link to="/policy" className="cursor-pointer">
            Policy
          </Link>
        </div>
      </nav>
      {dialogs.sl && (
        <StudenLogin setDialogs={setDialogs} setIsLoggedIn={setIsLoggedIn} />
      )}
      {dialogs.ol && (
        <OwnerLogin setDialogs={setDialogs} setIsLoggedIn={setIsLoggedIn} />
      )}
      {dialogs.or && (
        <OwnerRegistration
          setDialogs={setDialogs}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {dialogs.sr && (
        <StudentRegistration
          setDialogs={setDialogs}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default Header;
