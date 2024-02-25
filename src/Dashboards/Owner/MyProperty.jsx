import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Aos from "aos";
import home1 from "../../assets/home1.jpeg";
import "aos/dist/aos.css";
import { deleteRoom, getOwnerRooms } from "../../Apis/apicalls";
import { useNavigate } from "react-router-dom";
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
              className="flex text-dblue font-bold items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              My Properties
            </Link>
            <Link
              to="/dashboard/createproperty"
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
            to="/dashboard/notification"
            className=" flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/dashboard/myproperty"
            className="flex text-dblue font-bold items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            My Properties
          </Link>
          <Link
            to="/dashboard/createproperty"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">edit</span>Create
            Property
          </Link>
          <Link
            to="/dashboard/createproperty"
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
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="md:w-1/2 lg:w-1/3 2xl:w-1/4  flex flex-col gap-y-3 font-medium text-[20px] p-3 mb-10"
          >
            <img src={home1} className="w-full" />
            <p>Room Title</p>
            <p className="font-normal text-sm text-gray-600 line-clamp-3 h-[63px]">
              Room description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam eos temporibus omnis animi quas
              provident nemo dicta sed. Aperiam eligendi magnam accusantium
              labore maiores. Reiciendis.
            </p>
            <p className="text-lg">People allowed :6</p>
            <div className="flex flex-shrink justify-between items-center">
              <div>
                <p>Address</p>
                <div className="text-sm flex  gap-5 text-gray-600">
                  <p>Area</p>
                  <p>state</p>
                  <p>country</p>
                </div>
              </div>
              <div>
                <p>Price</p>
                <p className="text-sm  text-gray-600">$100</p>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setUpdate(true);
                }}
                className="border-2 w-[75%] mx-auto rounded-md bg-gray-100 border-gray-400 shadow-lg text-dblue mt-3 hover:scale-110 transition-transform duration-300"
              >
                Update
              </button>
              <button
                onClick={async () => {
                  const res = await deleteRoom({ roomId: room.id });
                  console.log(res, "slkfg");
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
        </div>
      </div>
      <Dialog open={update} onClose={handleCloseUpdate} hideBackdrop>
        <DialogTitle className="flex items-center">
          <span
            onClick={handleCloseUpdate}
            className="cursor-pointer  material-symbols-outlined"
          >
            close
          </span>
          <p className="mx-auto">Update Your Property</p>
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </Layouts>
  );
}

export default MyProperty;
