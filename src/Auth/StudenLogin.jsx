import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loginStudent } from "../Apis/apicalls";
import { Bounce, toast } from "react-toastify";

function StudenLogin({ setDialogs, setIsLoggedIn }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setDialogs((prev) => {
      return { ...prev, sl: false };
    });
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log("login")
    e.preventDefault();
    const response = await  loginStudent(formData);
   
    if (response.success) {
      setOpen(false);
      localStorage.setItem("user-token", response.authToken);
      toast.success("login successfull",
      {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      })
      setIsLoggedIn(true);
    } else {
      toast.error(response.errors[0].msg,{
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      })
      setLoading(false);  
    }
    
  };
  return (
    <Dialog
      hideBackdrop={false}
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
      }}
    >
      <DialogTitle className="text-center border-b-2 border-gray-300 flex items-center">
        <span
          onClick={handleClose}
          className="material-symbols-outlined mr-2 cursor-pointer"
        >
          close
        </span>
        <p className="mx-auto text-lg">Student Login</p>
      </DialogTitle>
      <DialogContent className="my-10">
        <p className="text-xl font-bold mb-5">Welcome to CampusNest</p>
        <TextField
          required
          name="email"
          fullWidth
          type="email"
          label="Enter Your email address"
          variant="outlined"
          onChange={handleChange}
          value={formData.email}
          InputProps={{
            style: {
              borderRadius: "5px",
              marginBottom: "10px",
            },
          }}
          className="mb-10"
        />
        <TextField
          required
          name="password"
          fullWidth
          type="password"
          label="Enter Your Password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            style: {
              borderRadius: "5px",
              marginBottom: "10px",
            },
          }}
        />
        <button
          onClick={handleSubmit}
          className="w-full border-2 bg-orange-500 py-3 rounded-md text-center hover:ring-2 hover:ring-orange-600 font-semibold text-white text-[18px]"
        >
          Submit
        </button>

        <Link className="flex justify-end underline text-md text-gray-600 hover:text-dblue">
          Forgot Password?
        </Link>
        <p className="text-center text-lg ">Or</p>
        <button className="flex mt-3 items-center  border-2 px-5 py-3 w-full rounded-md border-gray-600 hover:ring-2 hover:ring-gray-600">
          <FcGoogle className="w-6 h-6" />
          <p className="flex mx-auto font-semibold">Continue With Google</p>
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default StudenLogin;
