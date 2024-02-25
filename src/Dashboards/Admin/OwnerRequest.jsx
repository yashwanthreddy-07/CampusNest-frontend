import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import {
  ApproveRoom,
  RejectRoom,
  getRequestedRoomsForAdmin,
} from "../../Apis/apicalls";
import home1 from "../../assets/home1.jpeg";
import home2 from "../../assets/home2.jpeg";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function OwnerRequest() {
  const [allPendingRooms, setAllPendingRooms] = useState([]);
  const getAllPendingRooms = async () => {
    const res = await getRequestedRoomsForAdmin();
    setAllPendingRooms(res.rooms);
  };

  useEffect(() => {
    getAllPendingRooms();
  }, []);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const prevImage = () => {
    const images = document.getElementById("images");
    images.scrollLeft = images.scrollLeft - 500;
  };

  const nextImage = () => {
    const images = document.getElementById("images");
    images.scrollLeft = images.scrollLeft + 500;
  };
  // const image1 = [
  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",

  //   "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",

  //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",

  //   "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
  // ];
  return (
    <Layouts>
      <div className="md:hidden">
        <p
          onClick={() => {
            setOpen(true);
          }}
          className="flex  items-center p-2 border-b-2 text-lg font-medium justify-center cursor-pointer"
        >
          <span className="flex  material-symbols-outlined">dashboard</span>
          Dashboard
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
              className="flex  mx-auto items-center  text-lg font-medium justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </p>
          </DialogTitle>
          <DialogContent className="flex flex-col items-center gap-5 mt-7 text-xl">
            <Link
              to="/admin/dashboard/notification"
              className=" flex items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/admin/dashboard/studentrequest"
              className="flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">person</span>Student
              Requests
            </Link>
            <Link
              to="/admin/dashboard/ownerrequest"
              className="items-center font-bold text-dblue  flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              Owner Requests
            </Link>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-10 md:ml-24 flex  h-[100vh]  2xl:justify-center gap-10">
        <div className="hidden md:flex flex-col w-[400px] text-center p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/admin/dashboard/notification"
            className="flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/admin/dashboard/studentrequest"
            className="flex  items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">person</span>Student
            Requests
          </Link>
          <Link
            to="/admin/dashboard/ownerrequest"
            className="items-center font-bold text-dblue  flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            Owner Requests
          </Link>
        </div>
        <div className="mt-5  w-full">
          <p className="text-xl  font-medium ">Owner Requests</p>
          {allPendingRooms.map((room) => {
            const images = room?.images;
            <div>
              <div className="xl:flex">
                <p className="text-lg font-semibold text-gray-700 text-center">
                  Request Made for room {room.id} - {room.name}
                </p>
                <div className="flex  flex-wrap xl:w-[300px]">
                  <div className="flex flex-wrap xl:flex-col gap-x-10 mt-16 ">
                    <div className="flex flex-col gap-y-1 ">
                      <p className="text-lg font-bold">Owner Name</p>
                      <p className="text-lg text-gray-700 font-medium">
                        {room.owner.name}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-1 ">
                      <p className="text-lg font-bold">Phone Number</p>
                      <p className="text-lg text-gray-700 font-medium">
                        {room.owner.phno}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-lg font-bold">Age</p>
                      <p className="text-lg text-gray-700 font-medium">
                        {room.owner.age}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-lg font-bold">Slots</p>
                      <p className="text-lg text-gray-700 font-medium">
                        {room.slots}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-lg font-bold">Idproof</p>
                      <p className="text-lg text-gray-700">Doc1</p>
                    </div>
                  </div>
                </div>
                <div className="my-10  lg:w-[500px] md:w-[400px]  relative flex justify-center">
                  <div
                    id="images"
                    className="rounded-xl flex md:w-[400px] lg:w-[500px] overflow-auto scrollbar-hide"
                  >
                    <span
                      id="rightbutton"
                      onClick={prevImage}
                      className="cursor-pointer hidden md:inline-flex md:-ml-9  material-symbols-outlined absolute top-1/2  opacity-50 hover:opacity-100 text-[28px] hover:text-[36px] "
                    >
                      chevron_left
                    </span>
                    {images.map((img) => (
                      <img src={img} className=" md:w-full" />
                    ))}
                    <span
                      id="rightbutton"
                      onClick={nextImage}
                      className="cursor-pointer hidden md:inline-flex  right-0 md:-mr-9  material-symbols-outlined absolute top-1/2  opacity-50 hover:opacity-100 text-[28px] hover:text-[36px] "
                    >
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-10">
                <button
                  onClick={async () => {
                    await ApproveRoom({ roomId: room.id });
                    getAllPendingRooms();
                  }}
                  className="border-2 rounded-md hover:scale-110 transition-transform duration-300 font-semibold text-orange-700 border-gray-400 text-lg  py-1 px-3 w-24"
                >
                  Accept
                </button>
                <button
                  onClick={async () => {
                    await RejectRoom({ roomId: room.id });
                    getAllPendingRooms();
                  }}
                  className="border-2 rounded-md hover:scale-110 transition-transform duration-300 font-semibold text-orange-700 border-gray-400 text-lg  py-1 px-3 w-24"
                >
                  Reject
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </Layouts>
  );
}

export default OwnerRequest;
