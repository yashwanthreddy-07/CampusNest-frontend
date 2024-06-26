import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { signupStudent } from "../Apis/apicalls";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function StudentRegistration({ setDialogs, setIsLoggedIn }) {
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
    state: "",
    address: "",
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

    const response = await fetch(
      "https://campusnest-backend-uzto.onrender.com/auth/student-signup",
      {
        method: "POST",
        body: formDataToSend,
      }
    );
    const data = await response.json();
    console.log(data, "lklk");
    if (data.success) {
      localStorage.setItem("user-token", data.authToken);
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      setIsLoggedIn(true);
      setDialogs((prev) => {
        return { ...prev, sr: false };
      });
    } else {
      toast.error(data.errors[0].msg, {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      console.error("Error:", data);
    }
  };
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setDialogs((prev) => {
      return { ...prev, sr: false };
    });
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <Dialog
      open={open}
      data-aos="fade-left"
      data-aos-duration="500"
      onClose={handleClose}
      fullScreen={true}
      hideBackdrop={true}
      className="md:w-[51%] md:flex md:ml-auto "
    >
      <DialogTitle className="flex  items-center border-b-2 border-gray-200">
        <span
          className="material-symbols-outlined cursor-pointer pl-2"
          onClick={handleClose}
        >
          arrow_forward_ios
        </span>
        <p className="mx-auto font-semibold text-orange-600">
          Student Registration
        </p>
      </DialogTitle>
      <DialogContent>
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
            <p>Email</p>
            <TextField
              required={true}
              size="small"
              name="email"
              variant="outlined"
              type="email"
              label="Mail"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <p>Password</p>
            <TextField
              required={true}
              size="small"
              name="password"
              variant="outlined"
              type="password"
              label="Password"
              onChange={handleChange}
              value={formData.password}
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
          <div className="flex gap-5 flex-wrap items-center">
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
              required={true}
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
            className="w-36 mb-20 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default StudentRegistration;
