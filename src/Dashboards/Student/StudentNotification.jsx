import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import { getNotifications } from "../../Apis/apicalls";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
function StudentNotification() {
  const [notifications, setNotifications] = useState([]);

  const getNotifs = async () => {
    const res = await getNotifications({ role: "user" });
    setNotifications(res.notifications);
  };

  useEffect(() => {
    getNotifs();
  }, []);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Aos.init();
  });
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
              className="text-dblue flex font-bold  items-center gap-2 hover:scale-110 transition-transform duration-300 "
            >
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </Link>
            <Link
              to="/dashboard/bookings"
              className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">bed</span>Bookings
            </Link>
            <Link
              to="/dashboard/payments"
              className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">payments</span>
              payments
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
      <div className="mx-10 md:ml-24 flex h-[70vh] justify-center gap-10">
        <div className="hidden md:flex flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/dashboard/notification"
            className="text-dblue flex font-bold  items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/dashboard/bookings"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">bed</span>Bookings
          </Link>
          <Link
            to="/dashboard/payments"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">payments</span>payments
          </Link>
          <Link
            to="/chat"
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">chat</span>Chat
          </Link>
        </div>
        <div className="mt-10 flex flex-col gap-y-3 w-[700px]">
          <p className="text-xl font-medium">Notifications</p>
          <p className="p-1 text-lg text-gray-700 line-clamp-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            totam perspiciatis quia unde molestiae fugiat consequatur nisi ad,
            voluptates molestias architecto necessitatibus harum sapiente
            accusantium?
          </p>
          {notifications.map((notif) => {
            return (
              <>
                <p className="p-1 text-lg text-gray-700 line-clamp-1">
                  {notif.body}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </Layouts>
  );
}

export default StudentNotification;
