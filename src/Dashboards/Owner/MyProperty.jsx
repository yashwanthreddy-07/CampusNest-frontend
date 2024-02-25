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
import { deleteRoom, getOwnerRooms } from "../../Apis/apicalls";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function MyProperty() {
  const [properties, setProperties] = useState();
  const navigate = useNavigate();
  const getProperties = async () => {
    const properties = await getOwnerRooms();
    setProperties(properties.rooms);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const [open, setOpen] = useState(false);
  const [updateRoom, setUpdateRoom] = useState();
  const [updateFormData, setUpdateFormData] = useState({
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
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Aos.init();
  });

  const [update, setUpdate] = useState(false);
  const handleCloseUpdate = () => {
    setUpdate(false);
  };
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const handlePhotoChange = (e) => {
    setSelectedPhotos([...selectedPhotos, ...e.target.files]);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updateFormDataToSend = new FormData();
    updateFormDataToSend.append("name", updateFormData.name);
    updateFormDataToSend.append("address", updateFormData.address);
    updateFormDataToSend.append("country", updateFormData.country);
    updateFormDataToSend.append("state", updateFormData.state);
    updateFormDataToSend.append("pincode", updateFormData.pincode);
    updateFormDataToSend.append("price", updateFormData.price);
    updateFormDataToSend.append("slots", updateFormData.slots);
    updateFormDataToSend.append("description", updateFormData.description);
    updateFormDataToSend.append("bedrooms", updateFormData.bedrooms);
    updateFormDataToSend.append("bathrooms", updateFormData.bathrooms);
    updateFormDataToSend.append("locationurl", updateFormData.locationurl);
    updateFormDataToSend.append("id", updateFormData.id);
    // Append each selected photo to the updateFormData
    for (let i = 0; i < selectedPhotos.length; i++) {
      updateFormDataToSend.append("images", selectedPhotos[i]);
    }

    try {
      const response = await fetch("http://localhost:5000/update-room", {
        method: "PUT",
        headers: {
          "x-auth-token": localStorage.getItem("owner-token"),
        },
        body: updateFormDataToSend,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Room created Successfully");
        setUpdate(false);
        getProperties();
      } else {
        toast.warn(data.errors);
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
              to="/owner/dashboard/notification"
              className=" flex  items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/owner/dashboard/myproperty"
              className="flex text-dblue font-bold items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              My Properties
            </Link>
            <Link
              to="/owner/dashboard/createproperty"
              className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">edit</span>
              Create Property
            </Link>
            <Link
              to="/chat"
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
      <div className="mx-10 md:ml-24 2xl:justify-center flex   gap-10">
        <div className="hidden md:flex flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/owner/dashboard/notification"
            className=" flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/owner/dashboard/myproperty"
            className="flex text-dblue font-bold items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            My Properties
          </Link>
          <Link
            to="/owner/dashboard/createproperty"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">edit</span>Create
            Property
          </Link>
          <Link
            to="/owner/dashboard/createproperty"
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
        <div className="mt-10 flex flex-wrap  w-full">
          <p className="text-2xl w-full  pl-4 font-display">My Properties</p>
          {properties &&
            properties.map((property, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="md:w-1/2 lg:w-1/3 2xl:w-1/4  flex flex-col gap-y-3 font-medium text-[20px] p-3 mb-10"
                >
                  <img src={property.images[0]} className="w-full" />
                  <p>{property.name}</p>
                  <p className="font-normal text-sm text-gray-600 line-clamp-3 h-[63px]">
                    {property.description}
                  </p>
                  <p className="text-lg">People allowed :{property.slots}</p>
                  <div className="flex flex-shrink justify-between items-center">
                    <div>
                      <p>Address</p>
                      <div className="text-sm flex  gap-5 text-gray-600">
                        <p>{property.address}</p>
                        <p>{property.state}</p>
                        <p>{property.pincode}</p>
                        <p>{property.country}</p>
                      </div>
                    </div>
                    <div>
                      <p>Price</p>
                      <p className="text-sm  text-gray-600">
                        ${property.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={() => {
                        setUpdate(true);
                        setUpdateFormData(property);
                      }}
                      className="border-2 w-[75%] mx-auto rounded-md bg-gray-100 border-gray-400 shadow-lg text-dblue mt-3 hover:scale-110 transition-transform duration-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={async () => {
                        const res = await deleteRoom({ roomId: property.id });
                        if (res.success) {
                          getProperties();
                        } else {
                          alert(res.errors);
                        }
                      }}
                      className="border-2 w-[75%] mx-auto rounded-md bg-gray-100 shadow-lg border-gray-400 text-dblue mt-3 hover:scale-110 transition-transform duration-300"
                    >
                      Delete{" "}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Dialog
        open={update}
        onClose={handleCloseUpdate}
        hideBackdrop
        fullScreen
        className="my-16 w-[800px] mx-auto "
      >
        <form onSubmit={handleUpdateSubmit}>
          <DialogTitle className="flex items-center">
            <span
              onClick={handleCloseUpdate}
              className="cursor-pointer  material-symbols-outlined"
            >
              close
            </span>
            <p className="mx-auto">Update Your Property</p>
          </DialogTitle>
          <DialogContent>
            <div className="flex-wrap flex  gap-5 ">
              <div className="flex flex-col md:w-1/3 ">
                <p className="font-medium text-lg">Title</p>

                <TextField
                  type="text"
                  required
                  size="small"
                  label="suitable title for your property"
                  margin="none"
                  onChange={handleUpdateChange}
                  value={updateFormData.name}
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
                  onChange={handleUpdateChange}
                  value={updateFormData.description}
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
                  onChange={handleUpdateChange}
                  value={updateFormData.slots}
                  name="slots"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-lg">No of bedrooms</p>
                <TextField
                  onChange={handleUpdateChange}
                  required
                  type="number"
                  size="small"
                  label="Bedrooms"
                  value={updateFormData.bedrooms}
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
                  onChange={handleUpdateChange}
                  value={updateFormData.bathrooms}
                  name="bathrooms"
                />
              </div>
              <div className="flex flex-col   w-full">
                Address
                <div className="flex gap-x-5 flex-wrap gap-3">
                  <TextField
                    onChange={handleUpdateChange}
                    required
                    type="text"
                    label="Area"
                    size="small"
                    value={updateFormData.address}
                    name="address"
                  />
                  <TextField
                    onChange={handleUpdateChange}
                    required
                    type="text"
                    label="State"
                    size="small"
                    value={updateFormData.state}
                    name="state"
                  />
                  <TextField
                    onChange={handleUpdateChange}
                    required
                    type="text"
                    label="Country"
                    size="small"
                    value={updateFormData.country}
                    name="country"
                  />
                  <TextField
                    onChange={handleUpdateChange}
                    required
                    type="text"
                    label="Pin Code"
                    size="small"
                    value={updateFormData.pincode}
                    name="pincode"
                  />
                  <TextField
                    onChange={handleUpdateChange}
                    required
                    type="url"
                    label="location url from gmaps"
                    size="small"
                    value={updateFormData.locationurl}
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
                  onChange={handleUpdateChange}
                  value={updateFormData.price}
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
          </DialogContent>
          <button
            type="submit"
            className="px-4  py-2 font-medium rounded-md  border-2 mb-3 mx-auto border-gray-400 hover:scale-105 transition-transform duration-300"
          >
            Update
          </button>
        </form>
      </Dialog>
    </Layouts>
  );
}

export default MyProperty;
