import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import home1 from "../../assets/home1.jpeg";
import { getUserSlots } from "../../Apis/apicalls";
function StudentBooking() {
  const [userSlots, setUserSlots] = useState([]);
  const navigate = useNavigate();
  const getAllUserSlots = async () => {
    const res = await getUserSlots();
    setUserSlots(res.slots);
  };
  console.log(userSlots, "ldf");
  useEffect(() => {
    getAllUserSlots();
  }, []);

  useEffect(() => {
    Aos.init();
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layouts>
      <div className="md:hidden">
        <p
          onClick={() => {
            setOpen(true);
          }}
          className="flex items-center p-2 border-b-2 text-lg font-medium 2xl:  justify-center cursor-pointer"
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
              to="/user/dashboard/notifications"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/user/dashboard/bookings"
              className="flex text-dblue  font-bold items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">bed</span>Bookings
            </Link>
            <Link
              to="/user/dashboard/payments"
              className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">payments</span>
              payments
            </Link>
            <Link
              to="/user/chat"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">chat</span>Chat
            </Link>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-10 md:ml-24 flex h-[100vh] overflow-y-auto 2xl:justify-center gap-10">
        <div className="hidden md:flex flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/user/dashboard/notifications"
            className="flex  items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/user/dashboard/bookings"
            className="flex items-center text-dblue  font-bold gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">bed</span>Bookings
          </Link>
          <Link
            to="/user/dashboard/payments"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">payments</span>payments
          </Link>
          <Link
            to="/user/chat"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">chat</span>Chat
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap h-0  w-full">
          <p className="text-2xl w-full mb-5  pl-4 font-display">My Bookings</p>
          {userSlots?.map((slot) => {
            return (
              <div className="md:w-1/2 lg:w-1/3 2xl:w-1/4  flex flex-col gap-y-1 font-medium text-[20px] p-3 pt-0 mb-10">
                <img src={slot.room.images[0]} className="w-full" />
                <p>{slot.room.name}</p>
                <p className="font-normal text-sm text-gray-600 line-clamp-3 h-[63px]">
                  {slot.room.description}
                </p>
                <p>Address</p>
                <div className="text-sm flex  gap-x-5 text-gray-600">
                  <p>Area</p>
                  <p>state</p>
                  <p>country</p>
                </div>
                <p>Amount to be Paid</p>
                <p className="text-sm  text-gray-600">{slot.room.price}</p>
                <p className="font-medium text-[20px]">
                  Date of Joining {slot.doj.split("T")[0]}
                </p>
                <p className="font-medium text-[20px]">Status {slot.status}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layouts>
  );
}

export default StudentBooking;
