import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { getUserDetails, updateSecurity } from "../../Apis/apicalls";
import { Bounce, toast } from "react-toastify";
// import { signupStudent } from "../Apis/apicalls";
function StudentSecurity() {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const userdetails = await getUserDetails();
    setUserData(userdetails.user);
    setFormData({
      email: userdetails.user.email,
    });
  };

  useEffect(() => {
    getUser();
    Aos.init();
  }, []);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    newPassword: "",
    enteredPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateSecurity({
      ...formData,
      password: userData.password,
    });
    console.log(response);
    if (response.success) {
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error(response.errors[0].msg, {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  const [profile, setProfile] = useState(false);
  const handleprofile = () => {
    console.log("clicked");
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
              className="cursor-pointer flex mx-auto font-bold text-lg px-3 py-3 gap-3 justify-center items-center "
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p>Profile Menu</p>
            </div>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-7 font-medium text-xl">
            <Link
              to="/user/profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink
              to="/user/update-profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink
              to="/user/security"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:mx-20 mx-2 2xl:justify-center flex flex-shrink">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50 shadow-xl items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={userlogo} className="w-[100px]" />
            <p>Student Name</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-gray-700 text-xl ">
            <NavLink
              to="/user/profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
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
              className="flex gap-2 font-semibold text-dblue  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap md:mt-24 justify-between items-center w-[750px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:pl-5 pt-2 gap-x-10 gap-y-8 text-[18px] w-full md:w-1/2 font-medium"
          >
            <p>Want to change email?</p>
            <div className="flex flex-col ">
              <p>Email</p>
              <TextField
                required={true}
                size="small"
                name="email"
                variant="outlined"
                type="mail"
                label="Enter your new email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col">
              <p>Password</p>
              <TextField
                required={true}
                size="small"
                name="enteredPassword"
                variant="outlined"
                type="password"
                label="Password"
                onChange={handleChange}
                value={formData.enteredPassword}
              />
            </div>

            <button
              type="submit"
              className="w-36 mb-20 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              Update Email
            </button>
          </form>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:pl-5 pt-2 gap-x-10 gap-y-8 w-full md:w-1/2 text-[18px] font-medium"
          >
            <p>Want to change Password?</p>
            <div className="flex flex-col">
              <p>Password</p>
              <TextField
                required={true}
                size="small"
                name="enteredPassword"
                variant="outlined"
                type="password"
                label="Enter old password"
                onChange={handleChange}
                value={formData.enteredPassword}
              />
            </div>
            <div className="flex flex-col">
              <p>Password</p>
              <TextField
                required={true}
                size="small"
                name="newPassword"
                variant="outlined"
                type="password"
                label="enter new password"
                onChange={handleChange}
                value={formData.newPassword}
              />
            </div>

            <button
              type="submit"
              className="w-40 mb-20 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105  transition-transform duration-300"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </Layouts>
  );
}

export default StudentSecurity;
