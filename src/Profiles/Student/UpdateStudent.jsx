import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { getUserDetails } from "../../Apis/apicalls";
import { Bounce, toast } from "react-toastify";
// import { signupStudent } from "../Apis/apicalls";
function UpdateStudent() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const getUser = async () => {
    const userdetails = await getUserDetails();
    setUserData(userdetails.user);
    setFormData({
      name: userdetails.user.name,
      password: "",
      email: userdetails.user.email,
      dob: userdetails.user.dob,
      phno: userdetails.user.phno,
      gender: userdetails.user.gender,
      college_name: userdetails.user.college_name,
      course: userdetails.user.course,
      degree: userdetails.user.degree,
      address: userdetails.user.address,
      state: userdetails.user.state,
      country: userdetails.user.country,
      pincode: userdetails.user.pincode,
      hobbies: userdetails.user.hobbies.join(","),
      interests: userdetails.user.interests.join(","),
      image: userdetails.user.profile_image,
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  const [image, setImage] = useState(null);
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
    address: "",
    state: "",
    country: "",
    pincode: "",
    hobbies: "",
    interests: "",
    image: "",
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
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("phno", formData.phno);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("college_name", formData.college_name);
    formDataToSend.append("course", formData.course);
    formDataToSend.append("degree", formData.degree);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("pincode", formData.pincode);
    formDataToSend.append("hobbies", formData.hobbies);
    formDataToSend.append("interests", formData.interests);
    formDataToSend.append("image", image);

    const response = await fetch("https://campusnest-backend-1.onrender.com/get/update-profile", {
      headers: {
        "x-auth-token": localStorage.getItem("user-token"),
      },
      method: "PUT",
      body: formDataToSend,
    });
    const data = await response.json();
    console.log(response);
    debugger;
    if (data.success) {
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/user/profile");
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
              className="flex cursor-pointer mx-auto font-bold text-lg px-3 py-3 gap-3 justify-center items-center "
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p>Profile Menu</p>
            </div>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-7 font-medium text-xl">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={formData.profile_image} className="w-[100px]" />
            <p>{formData.name}</p>
          </div>
            <Link
              to="/user/profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink
              to="/user/update-profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
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
      <div className="md:mx-20 mx-2 2xl:justify-center flex flex-shrink">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50 shadow-xl items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={formData.image} className="w-[100px]" />
            <p>{formData.name}</p>
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
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
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

        <div className="flex flex-wrap w-[750px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap pl-5 pt-2 gap-x-10 gap-y-8 text-[18px] font-medium"
          >
            <div className="flex flex-col ">
              <p>Name</p>
              <TextField
                required={true}
                size="small"
                name="name"
                variant="outlined"
                type="text"
                label="Enter Your Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col">
              <p>Date of Birth</p>
              <TextField
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
                size="small"
                name="address"
                variant="outlined"
                type="text"
                label="Area"
                onChange={handleChange}
                value={formData.address}
              />

              <TextField
                required={true}
                size="small"
                name="state"
                variant="outlined"
                type="text"
                label="State"
                onChange={handleChange}
                value={formData.state}
              />
              <TextField
                required={true}
                size="small"
                name="country"
                variant="outlined"
                type="text"
                label="Coutry"
                onChange={handleChange}
                value={formData.country}
              />
              <TextField
                required={true}
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
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-36 mb-20 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105  transition-transform duration-300"
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
