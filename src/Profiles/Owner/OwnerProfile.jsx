import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { getOwnerDetails } from "../../Apis/apicalls";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
function OwnerProfile() {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const ownerdetails = await getOwnerDetails();
    setUserData(ownerdetails.user);
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    Aos.init();
  });

  const [profile, setProfile] = useState(false);
  const handleprofile = () => {
    setProfile(true);
  };
  const handleClose = () => {
    setProfile(false);
  };
  return (
    <Layouts>
      <div className="md:hidden ">
        <div
          onClick={handleprofile}
          className="cursor-pointer flex font-medium text-lg px-3 py-3 gap-3 justify-center items-center border-b-2"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <p>Profile Menu</p>
        </div>
        <Dialog
          open={profile}
          onClose={handleClose}
          data-aos="fade-left"
          data-aos-duration="500"
          fullScreen
          className="mt-[50px] "
          hideBackdrop
        >
          <DialogTitle className="flex items-center ">
            <span
              onClick={handleClose}
              className=" cursor-pointer material-symbols-outlined"
            >
              close
            </span>
            <div
              onClick={handleClose}
              className="flex cursor-pointer mx-auto font-bold text-lg px-3 py-3 gap-3 justify-center items-center "
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p>Profile Menu</p>
            </div>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-7 font-medium text-xl">
            <Link
              to="/profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink to="/updateprofile" className="flex gap-2 items-center hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink to="/security" className="flex gap-2 items-center hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-20 xl:justify-center flex">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50  items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={userlogo} className="w-[100px]" />
            <p>Owner Name</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-gray-700 text-xl ">
            <NavLink
              to="/profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>Personal
            </NavLink>
            <NavLink to="/updateprofile" className="flex gap-2 items-center hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink to="/security" className="flex gap-2 items-center hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </div>
        </div>

        <div className=" ml-10   md:ml-24  flex-col gap-y-3 w-[750px]">
          <p className="font-bold text-xl my-5 ">Personal Details</p>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Name</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300">
              Owner name
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Age</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300">
              21
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Date of Birth</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              07/11/2002
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Email</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              student@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Phone Number</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              789456123
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Gender</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              M
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Course</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              efg Course
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Ownership Type</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              Owner
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Unique ID</p>
            <p className="font-medium text-md text-gray-800 ">789654123321</p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Address</p>
            <div className="flex gap-5 border-2 p-1 border-gray-300">
              <p className="font-medium text-md text-gray-800 ">Area</p>
              <p className="font-medium text-md text-gray-800 ">state</p>
              <p className="font-medium text-md text-gray-800 ">COuntry</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Documents</p>
            <div>
              <p>doc1</p>
              <p>doc2</p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default OwnerProfile;
