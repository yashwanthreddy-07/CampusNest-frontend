import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function HeaderLogin({ setIsLoggedIn }) {
  const [menu, SetMenu] = useState(false);
  const [support, setSupport] = useState(false);
  const navigate = useNavigate();
  // const dropdownRef = useRef(null);

  const handlemenu = () => {
    SetMenu(!menu);
  };

  const handleSupport = () => {
    setSupport(!support);
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

        <p className="hidden text-orange-700 text-[20px] xl:inline  font-serif ">
          Experience new way of Finding Homes
        </p>
        <div className="flex items-center  gap-8 text-[18px] font-medium">
          <Link
            to="/searchproperty"
            className="relative cursor-pointer hover:scale-105 hover:underline hover:text-dblue transition-transform duration-300 hover"
            id="SignIn"
          >
            Rooms
          </Link>

          <p className="relative cursor-pointer hover:scale-105 hover:underline hover:text-dblue transition-transform duration-300 hover">
            DashBoard
          </p>
          <Link
            to="/profile"
            className="relative cursor-pointer hover:scale-105 hover:underline hover:text-dblue transition-transform duration-300 hover"
          >
            Profile
          </Link>
          <p
            className="relative cursor-pointer hover:scale-105 hover:underline hover:text-dblue transition-transform duration-300 hover"
            onClick={() => {
              localStorage.clear();
              navigate("/");
              toast.success("Log Out Successfull", {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                theme: "dark",
                transition: Bounce,
              });
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </p>
          <div
            onMouseEnter={handleSupport}
            onMouseLeave={() => setSupport(false)}
          >
            <span className="material-symbols-outlined cursor-pointer relative text-3xl">
              contact_support
            </span>
            {support && (
              <div className="border-2 rounded-md bg-g  text-gray-600 bg-gray-100 text-[15px] hover:scale-105 transition-transform duration-300 hover text-wrap p-3 max-w-[200px] absolute flex flex-col gap-2 -ml-44">
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
      <nav className="sticky top-0  w-full md:hidden  ">
        <div className="px-5 flex justify-between  items-center h-[50px] bg-gray-50 border-b-2 border-gray-200">
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
          className={` w-full fixed text-gray-700 bg-gray-50 font-medium h-full   text-[20px]  rounded-md flex flex-1 flex-col gap-3  px-10 py-5  transition-transform duration-700 transform ${
            menu ? "translate-x-0" : "translate-x-[1000px]"
          } `}
        >
          <Link to="/">Home</Link>

          <Link to="/searchproperty" className="cursor-pointer">
            {" "}
            Rooms
          </Link>
          <Link to="/profile" className="cursor-pointer">
            {" "}
            Profile
          </Link>
          <p onClick={() => {}} className="cursor-pointer">
            DashBoard
          </p>

          <div>
            <p
              onClick={() => {
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
          <p
            className="cursor-pointer"
            onClick={() => {
              localStorage.clear();
              navigate("/");
              toast.success("Log Out Successfull", {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                theme: "dark",
                transition: Bounce,
              });
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </p>
        </div>
      </nav>
    </>
  );
}

export default HeaderLogin;
