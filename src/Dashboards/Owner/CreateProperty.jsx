import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";
function CreateProperty() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    pincode: "",
    price: "",
    slots: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    locationurl: "",
  });
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
    formDataToSend.append("address", formData.address);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("pincode", formData.pincode);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("slots", formData.slots);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("bedrooms", formData.bedrooms);
    formDataToSend.append("bathrooms", formData.bathrooms);
    formDataToSend.append("locationurl", formData.locationurl);
    // Append each selected photo to the formData
    for (let i = 0; i < selectedPhotos.length; i++) {
      formDataToSend.append("images", selectedPhotos[i]);
    }
    console.log(formDataToSend);

    try {
      const response = await fetch(
        "https://campusnest-backend-1.onrender.com/create-room",
        {
          method: "POST",
          headers: {
            "x-auth-token": localStorage.getItem("owner-token"),
          },
          body: formDataToSend,
        }
      );
      const data = await response.json();

      if (data.success) {
        toast.success("Room created Successfully");
        navigate("/owner/dashboard/myproperty");
      } else {
        toast.warn(data.errors);
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              to="/owner/dashboard/notifications"
              className=" flex  items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/owner/dashboard/myproperty"
              className="flex  items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              My Properties
            </Link>
            <Link
              to="/owner/dashboard/createproperty"
              className="items-center text-dblue font-bold flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">edit</span>
              Create Property
            </Link>
            {/* <Link
              to="/owner/dashboard/payments"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">payments</span>
              Payments
            </Link> */}
            <Link
              to="/owner/chat"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">chat</span>Chat
            </Link>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-10 md:ml-24   2xl:justify-center flex   gap-x-10">
        <div className="hidden md:flex md:flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/owner/dashboard/notifications"
            className=" flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/owner/dashboard/myproperty"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            My Properties
          </Link>
          <Link
            to="/owner/dashboard/createproperty"
            className="items-center text-dblue font-bold   flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">edit</span>Create
            Property
          </Link>
          {/* <Link
            to="/owner/dashboard/payments"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">payments</span>
            Payments
          </Link> */}
          <Link
            to="/owner/chat"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">chat</span>Chat
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="mt-10  flex  flex-col w-full">
          <div className="flex-wrap  flex  gap-5 ">
            <div className="flex flex-col md:w-1/3 ">
              <p className="font-medium text-lg">Title</p>

              <TextField
                type="text"
                required
                size="small"
                label="suitable title for your property"
                margin="none"
                onChange={handleChange}
                value={formData.name}
                name="name"
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
                onChange={handleChange}
                value={formData.description}
                name="description"
              />
            </div>
            <div className="flex flex-col md:w-1/3">
              <p className="font-medium text-lg">People allowed to stay</p>
              <TextField
                required
                type="number"
                size="small"
                label="number of people allowed"
                onChange={handleChange}
                value={formData.slots}
                name="slots"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-lg">No of bedrooms</p>
              <TextField
                onChange={handleChange}
                required
                type="number"
                size="small"
                label="Bedrooms"
                value={formData.bedrooms}
                name="bedrooms"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-lg">No of bathrooms</p>
              <TextField
                required
                type="number"
                size="small"
                label="Bathrooms"
                onChange={handleChange}
                value={formData.bathrooms}
                name="bathrooms"
              />
            </div>
            <div className="flex flex-col   w-full">
              Address
              <div className="flex gap-x-5 flex-wrap gap-3">
                <TextField
                  onChange={handleChange}
                  required
                  type="text"
                  label="Area"
                  size="small"
                  value={formData.address}
                  name="address"
                />
                <TextField
                  onChange={handleChange}
                  required
                  type="text"
                  label="State"
                  size="small"
                  value={formData.state}
                  name="state"
                />
                <TextField
                  onChange={handleChange}
                  required
                  type="text"
                  label="Country"
                  size="small"
                  value={formData.country}
                  name="country"
                />
                <TextField
                  onChange={handleChange}
                  required
                  type="text"
                  label="Pin Code"
                  size="small"
                  value={formData.pincode}
                  name="pincode"
                />
                <TextField
                  onChange={handleChange}
                  required
                  type="url"
                  label="location url from gmaps"
                  size="small"
                  value={formData.locationurl}
                  name="locationurl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-lg">Price</p>
              <TextField
                required
                type="number"
                size="small"
                label="Price"
                onChange={handleChange}
                value={formData.price}
                name="price"
              />
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
          <button
            type="submit"
            className="border-2 mb-5 md mx-auto p-2 rounded-md text-md font-medium border-gray-400 hover:scale-105 transition-transform duration-300 "
          >
            Create Property
          </button>
        </form>
      </div>
    </Layouts>
  );
}

export default CreateProperty;
