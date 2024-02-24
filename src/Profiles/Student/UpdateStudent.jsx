import React, { useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
// import { signupStudent } from "../Apis/apicalls";
function UpdateStudent() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    dob: "",
    phno: "",
    gender: "",
    college_name: "",
    course: "",
    degree: "",
    state: "",
    country: "",
    pincode: "",
    hobbies: "",
    interests: "",
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
    const response = await signupStudent(formData);
    console.log(response);
    if (response.success) {
      localStorage.setItem("user-token", response.authToken);
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      setIsLoggedIn(true);
      setOpen(false);
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
              className="cursor-pointer material-symbols-outlined"
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
            <Link to="/profile" className="flex gap-2  items-center">
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink
              to="/updateprofile"
              className="flex gap-2 font-semibold text-dblue items-center"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink to="/security" className="flex gap-2 items-center">
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-20 xl:justify-center flex flex-shrink">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50 shadow-xl items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={userlogo} className="w-[100px]" />
            <p>Student Name</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-gray-700 text-xl ">
            <NavLink to="/profile" className="flex gap-2  items-center">
              <span className="material-symbols-outlined ">person</span>Personal
            </NavLink>
            <NavLink
              to="/updateprofile"
              className="flex gap-2 font-semibold text-dblue items-center"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink to="/security" className="flex gap-2 items-center">
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap w-[750px]">
          <form
            // onSubmit={handleSubmit}
            className="flex flex-wrap pl-5 pt-2 gap-x-10 gap-y-8 text-[18px] font-medium"
          >
            <div className="flex flex-col ">
              <p>Name</p>
              <TextField
                size="small"
                name="name"
                variant="outlined"
                type="text"
                label="Enter Your Name"
                // onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col">
              <p>Date of Birth</p>
              <TextField
                size="small"
                name="dob"
                variant="outlined"
                type="date"
                onChange={handleChange}
                value={formData.dob}
              />
            </div>

            <div className="flex flex-col ">
              <p>Phone Number</p>
              <TextField
                size="small"
                name="phno"
                variant="outlined"
                type="text"
                label="Mobile Number"
                onChange={handleChange}
                value={formData.phno}
              />
            </div>
            <div className="flex flex-col ">
              <p>College Name</p>
              <TextField
                size="small"
                name="college_name"
                variant="outlined"
                type="text"
                label="College Name"
                onChange={handleChange}
                value={formData.college_name}
              />
            </div>
            <div className="flex flex-col">
              <p>Pursuing Course</p>
              <TextField
                size="small"
                name="course"
                variant="outlined"
                type="text"
                label="Course Name"
                onChange={handleChange}
                value={formData.course}
              />
            </div>
            <div className="flex flex-col ">
              <p>Highest Qualification</p>
              <TextField
                size="small"
                name="degree"
                variant="outlined"
                type="text"
                label="Qualification"
                onChange={handleChange}
                value={formData.degree}
              />
            </div>
            <div className="flex flex-col ">
              <p>Hobbies</p>
              <TextField
                size="small"
                name="hobbies"
                variant="outlined"
                type="text"
                label="Your Hobbies"
                onChange={handleChange}
                value={formData.hobbies}
              />
            </div>
            <div className="flex flex-col ">
              <p>Intrests</p>
              <TextField
                size="small"
                name="interests"
                variant="outlined"
                type="text"
                label="Your Intrests"
                onChange={handleChange}
                value={formData.interests}
              />
            </div>
            <div className="flex flex-col ">
              <p>Gender</p>
              <TextField
                size="small"
                name="gender"
                variant="outlined"
                type="text"
                label="M/F/other"
                onChange={handleChange}
                value={formData.gender}
              />
            </div>
            <div className="flex gap-5 items-center flex-wrap">
              <p>Address</p>
              <TextField
                // required={true}
                size="small"
                name="area"
                variant="outlined"
                type="text"
                label="Area"
                onChange={handleChange}
                //   value={formData.area}
              />

              <TextField
                size="small"
                name="state"
                variant="outlined"
                type="text"
                label="State"
                onChange={handleChange}
                value={formData.state}
              />
              <TextField
                size="small"
                name="country"
                variant="outlined"
                type="text"
                label="Coutry"
                onChange={handleChange}
                value={formData.country}
              />
              <TextField
                size="small"
                name="pincode"
                variant="outlined"
                type="text"
                label="PinCode"
                onChange={handleChange}
                value={formData.pincode}
              />
            </div>
            <div className="flex flex-col ">
              <p>Profile Photo</p>
              <TextField
                size="small"
                name="photo"
                type="file"
                variant="standard"
                className="flex items-center"
                onChange={handleChange}
                //   value={formData.photo}
              />
            </div>
            <button
              type="submit"
              className="w-36 mb-20 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </Layouts>
  );
}

export default UpdateStudent;
