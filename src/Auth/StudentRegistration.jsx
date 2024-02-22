import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { signupStudent } from "../Apis/apicalls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentRegistration() {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
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
    setLoading(true);
    toast.success("Registration successfull", {
      autoClose: 2000,
      closeOnClick: true,
      theme: "dark",
      transition: Bounce,
    });
    e.preventDefault();
    const response = await signupStudent(formData);
    if (response.success) {
      localStorage.setItem("user-token", response.authToken);
      navigate("/");
    } else {
      setLoading(false);
      toast.warn(response.errors[0].msg, {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={true}
      hideBackdrop={true}
      className="mx-14 mt-6 mb-[58px]"
    >
      <DialogTitle className="flex items-center border-b-2 border-gray-200">
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleClose}
        >
          close
        </span>
        <p className="mx-auto font-semibold text-orange-600">
          Student Registration
        </p>
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap pl-5 pt-2 gap-x-16 gap-y-8 text-[18px] font-medium"
        >
          <div className="flex flex-col w-1/5">
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
          <div className="flex flex-col w-1/5">
            <p>Date of Birth</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="date"
              onChange={handleChange}
              value={formData.dob}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Email</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="email"
              label="Mail"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Password</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="password"
              label="Password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Phone Number</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Mobile Number"
              onChange={handleChange}
              value={formData.phno}
            />
          </div>
          <div className="flex flex-col w-1/4">
            <p>College Name</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="College Name"
              onChange={handleChange}
              value={formData.college_name}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Pursuing Course</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Course Name"
              onChange={handleChange}
              value={formData.course}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Highest Qualification</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Qualification"
              onChange={handleChange}
              value={formData.degree}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Hobbies</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Your Hobbies"
              onChange={handleChange}
              value={formData.hobbies}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Intrests</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Your Intrests"
              onChange={handleChange}
              value={formData.interests}
            />
          </div>
          <div className="flex flex-col w-1/5">
            <p>Gender</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="M/F/other"
              onChange={handleChange}
              value={formData.gender}
            />
          </div>
          <div className="flex gap-5 items-center">
            <p>Address</p>
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Area"
              onChange={handleChange}
              //   value={formData.area}
            />

            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="State"
              onChange={handleChange}
              value={formData.state}
            />
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="Coutry"
              onChange={handleChange}
              value={formData.country}
            />
            <TextField
              required={true}
              size="small"
              name="name"
              variant="outlined"
              type="text"
              label="PinCode"
              onChange={handleChange}
              value={formData.pincode}
            />
          </div>
          <div className="flex flex-col  ">
            <p>Profile Photo</p>
            <TextField
              size="small"
              name="name"
              type="file"
              variant="standard"
              className="flex items-center"
              onChange={handleChange}
              //   value={formData.photo}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions className="mr-24 mb-10">
        <button className="w-36 border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105">
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentRegistration;
