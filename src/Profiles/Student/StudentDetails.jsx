import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { getUserDetails } from "../../Apis/apicalls";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
function StudentDetails() {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const userdetails = await getUserDetails();
    setUserData(userdetails.user);
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
          className="flex cursor-pointer font-medium text-lg px-3 py-3 gap-3 justify-center items-center border-b-2"
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
          className="mt-[50px] md:hidden"
          hideBackdrop
        >
          <DialogTitle className="flex items-center ">
            <span
              onClick={handleClose}
              className="cursor-pointer material-symbols-outlined"
            >
              close
            </span>
            <div
              onClick={handleClose}
              className="flex mx-auto font-bold text-lg cursor-pointer px-3 py-3 gap-3 justify-center items-center "
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p>Profile Menu</p>
            </div>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-7 font-medium text-xl">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={userData.profile_image} className="w-[100px]" />
            <p>{userData.name}</p>
          </div>
            <Link
              to="/user/profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink
              to="/user/update-profile"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink
              to="/user/security"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:mx-14 mx-2 2xl:justify-center flex">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50  items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={userData.profile_image} className="w-[100px]" />
            <p>{userData.name}</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-gray-700 text-xl ">
            <NavLink
              to="/user/profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>Personal
            </NavLink>
            <NavLink
              to="/user/update-profile"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink
              to="/user/security"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </div>
        </div>

        <div className="md:ml-24 mb-10 flex-col gap-y-3 w md:w-[750px]">
          <p className="font-bold text-xl my-5 ">Personal Details</p>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Name</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300">
              {userData.name}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Age</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300">
              {userData.age}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Date of Birth</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.dob}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Email</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.email}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Phone Number</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.phno}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg"> Gender</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.gender}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">College</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.college_name}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Course</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.course}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">degree</p>
            <p className="font-medium text-md text-gray-8p00 border-2 p-1 border-gray-300 ">
              {userData.degree}
            </p>
          </div>

          <div className="flex  flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Address</p>
            <div className="flex flex-wrap gap-5 border-2 p-1 border-gray-300">
              <p className="font-medium text-md text-gray-800 ">
                {userData.address}
              </p>
              <p className="font-medium text-md text-gray-800 ">
                {userData.district}
              </p>
              <p className="font-medium text-md text-gray-800 ">
                {userData.state}
              </p>
              <p className="font-medium text-md text-gray-800 ">
                {userData.country}
              </p>
              <p className="font-medium text-md text-gray-800 ">
                {userData.pincode}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Hobbies</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.hobbies}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="font-serif font-semibold text-lg">Intrests</p>
            <p className="font-medium text-md text-gray-800 border-2 p-1 border-gray-300 ">
              {userData.interests}
            </p>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default StudentDetails;
