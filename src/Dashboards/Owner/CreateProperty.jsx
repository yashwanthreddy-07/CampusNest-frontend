import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Aos from "aos";
import home1 from "../../assets/home1.jpeg";
import "aos/dist/aos.css";
function CreateProperty() {
  const [open, setOpen] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Aos.init();
  });
  const handlePhotoChange = (e) => {
    setSelectedPhotos([...selectedPhotos, ...e.target.files]);
  };

  return (
    <Layouts>
      <div className="md:hidden">
        <p
          onClick={() => {
            setOpen(true);
          }}
          className="flex items-center p-2 border-b-2 text-lg font-medium justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">dashboard</span>Dashboard
        </p>
        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          hideBackdrop
          data-aos="fade-left"
          data-aos-duration="500"
          className="mt-[51px]"
        >
          <DialogTitle className="flex items-center">
            <span
              onClick={handleClose}
              className="cursor-pointer material-symbols-outlined"
            >
              close
            </span>
            <p
              onClick={handleClose}
              className="flex mx-auto items-center  text-lg font-medium justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </p>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-5 mt-7 text-xl">
            <Link
              to="/dashboard/notification"
              className=" flex  items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/dashboard/myproperty"
              className="flex  items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              My Properties
            </Link>
            <Link
              to="/dashboard/createproperty"
              className="items-center text-dblue font-bold flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">edit</span>
              Create Property
            </Link>
            <Link
              to="/payments"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">payments</span>
              Payments
            </Link>
            <Link
              to="/chat"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">chat</span>Chat
            </Link>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-10 md:ml-24  2xl:justify-center flex   gap-x-10">
        <div className="hidden md:flex md:flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/dashboard/notification"
            className=" flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/dashboard/myproperty"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            My Properties
          </Link>
          <Link
            to="/dashboard/createproperty"
            className="items-center text-dblue font-bold   flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">edit</span>Create
            Property
          </Link>
          <Link
            to="/dashboard/payments"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">payments</span>
            Payments
          </Link>
          <Link
            to="/chat"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">chat</span>Chat
          </Link>
        </div>
        <div className="mt-10 h-[70vh] flex items- flex-col w-full">
          <div className="flex-wrap  h-0 flex  gap-5 ">
            <div className="flex flex-col md:w-1/3 ">
              <p className="font-medium text-lg">Title</p>

              <TextField
                type="text"
                required
                size="small"
                label="suitable title for your property"
                margin="none"
              />
            </div>
            <div className="flex flex-col md:w-1/3">
              <p className="font-medium text-lg">Description</p>
              <TextareaAutosize
                required
                size="small"
                label="suitable title for your property"
                className="p-2 border-gray-400 outline-none border-2 "
                minRows={1}
              />
            </div>
            <div className="flex flex-col md:w-1/3">
              <p className="font-medium text-lg">People allowed to stay</p>
              <TextField
                required
                type="number"
                size="small"
                label="number of people allowed"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-lg">No of bedrooms</p>
              <TextField required type="number" size="small" label="Bedrooms" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-lg">No of bathrooms</p>
              <TextField
                required
                type="number"
                size="small"
                label="Bathrooms"
              />
            </div>
            <div className="flex flex-col   w-full">
              Address
              <div className="flex gap-x-5 flex-wrap gap-3">
                <TextField required type="text" label="Area" size="small" />
                <TextField required type="text" label="State" size="small" />
                <TextField required type="text" label="Country" size="small" />
                <TextField required type="text" label="Pin Code" size="small" />
                <TextField
                  required
                  type="url"
                  label="location url from gmaps"
                  size="small"
                />
              </div>
            </div>
            <div className=" pb-2">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                multiple
                className="hidden"
                id="photoInput"
              />
              <label id="imginput" htmlFor="photoInput" className="">
                Click here to upload photos
              </label>
              <div className="flex gap-2 flex-wrap items-center">
                {selectedPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(photo)}
                    alt={`Photo ${index + 1}`}
                    className="w-[70px] mt-4 h-[70px]"
                  />
                ))}
                <span
                  id="imgplus"
                  onClick={() => {
                    document.getElementById("imginput").click();
                  }}
                  className="cursor-pointer border-2 border-gray-400 p-5 text-[28px] material-symbols-outlined "
                >
                  add
                </span>
              </div>
            </div>
          </div>
          <button className="border-2 mx-auto p-2 rounded-md text-md font-medium border-gray-400 hover:scale-105 transition-transform duration-300 ">
            Create Property
          </button>
        </div>
      </div>
    </Layouts>
  );
}

export default CreateProperty;
