import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userlogo from "../../assets/userlogo.jpg";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { getOwnerDetails } from "../../Apis/apicalls";
import { Bounce, toast } from "react-toastify";
// import { appendFile } from "fs";
function UpdateOwner() {
  const [ownerData, setOwnerData] = useState({});
  const navigate = useNavigate();
  const getOwner = async () => {
    const ownerdetails = await getOwnerDetails();
    setOwnerData(ownerdetails.owner);
    setFormData({
      name: ownerdetails.owner.name,
      password: "",
      email: ownerdetails.owner.email,
      dob: ownerdetails.owner.dob,
      phno: ownerdetails.owner.phno,
      gender: ownerdetails.owner.gender,
      uin: ownerdetails.owner.uin,
      ownership: ownerdetails.owner.ownership,
      address: ownerdetails.owner.address,
      state: ownerdetails.owner.state,
      country: ownerdetails.owner.country,
      pincode: ownerdetails.owner.pincode,
      image: ownerdetails.owner.profile_image,
    });
    setImage(ownerdetails.owner.profile_image);
  };
  useEffect(() => {
    getOwner();
  }, []);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    dob: "",
    phno: "",
    gender: "",
    uin: "",
    address: "",
    state: "",
    country: "",
    pincode: "",
    ownership: "",
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
    formDataToSend.append("email", formData.email);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("phno", formData.phno);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("pincode", formData.pincode);
    formDataToSend.append("uin", formData.uin);
    formDataToSend.append("ownership", formData.ownership);
    formDataToSend.append("image", image);
    console.log(localStorage.getItem("owner-token"), "slddf");
    const response = await fetch(
      "https://campusnest-backend-uzto.onrender.com/get/update-owner-profile",
      {
        headers: {
          "x-auth-token": localStorage.getItem("owner-token"),
        },
        method: "PUT",
        body: formDataToSend,
      }
    );

    const data = await response.json();
    console.log(response);
    if (data.success) {
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/owner/profile");
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
              className="flex mx-auto font-bold text-lg px-3 py-3 cursor-pointer gap-3 justify-center items-center "
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p>Profile Menu</p>
            </div>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-7 font-medium text-xl">
            <div className="font-bold text-dblue text-xl flex flex-col items-center">
              <img src={ownerData.profile_image} className="w-[100px]" />
              <p>{ownerData.name}</p>
            </div>

            <Link
              to="/owner/profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>
              Personal
            </Link>
            <NavLink
              to="/owner/update-profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink
              to="/owner/security"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:mx-20 mx-2 2xl:justify-center mb-10   flex flex-shrink">
        <div className="hidden w-[300px] mt-24 md:flex flex-col  bg-gray-50 shadow-xl items-center">
          <div className="font-bold text-dblue text-xl flex flex-col items-center">
            <img src={image} className="w-[100px]" />
            <p>{formData.name}</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-gray-700 text-xl ">
            <NavLink
              to="/owner/profile"
              className="flex gap-2  items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined ">person</span>Personal
            </NavLink>
            <NavLink
              to="/owner/update-profile"
              className="flex gap-2 font-semibold text-dblue items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">update</span>Update
              Details
            </NavLink>
            <NavLink
              to="/owner/security"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">lock</span>
              security
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap  w-[750px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap pl-5 pt-2 gap-x-10 gap-y-8 text-[18px] font-medium"
          >
            <div className="flex flex-col">
              <p>Name</p>
              <TextField
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
                size="small"
                name="dob"
                variant="outlined"
                type="date"
                onChange={handleChange}
                value={formData.dob}
              />
            </div>

            <div className="flex flex-col">
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
            <div className="flex flex-col ">
              <p>OwnerShip Type</p>
              <TextField
                size="small"
                name="ownership"
                variant="outlined"
                type="text"
                label="Owner/Agent"
                onChange={handleChange}
                value={formData.ownership}
              />
            </div>
            <div className="flex flex-col ">
              <p>Unique ID</p>
              <TextField
                size="small"
                name="uin"
                variant="outlined"
                type="text"
                label="Unique id given government"
                onChange={handleChange}
                value={formData.uin}
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
                label="Address"
                onChange={handleChange}
                value={formData.address}
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
                required={true}
                size="small"
                name="name"
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
              className="w-36 mb-10 mx-auto border-2 py-1 rounded-md border-gray-600  text-gray-800 font-semibold text-lg hover:scale-105  transition-transform duration-300"
            >
              Update
            </button>
          </form>{" "}
        </div>
      </div>
    </Layouts>
  );
}

export default UpdateOwner;
