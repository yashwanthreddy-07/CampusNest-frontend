import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import {
  ApproveRequestedSlot,
  RejectRequestedSlot,
  getRequestedSlotsForAdmin,
} from "../../Apis/apicalls";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function StudentRequest() {
  const [allPendingUserRequests, setAllPendingUserRequests] = useState([]);
  const getAllPendingUserRequests = async () => {
    const res = await getRequestedSlotsForAdmin();
    setAllPendingUserRequests(res.slots);
  };

  useEffect(() => {
    getAllPendingUserRequests();
  }, []);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [fileopen, setFileOpen] = useState(false);
  const [file, setFile] = useState("");
  const handleclosefile = () => {
    setFileOpen(false);
  };
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
              className="flex font-bold text-dblue  items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">person</span>Student
              Requests
            </Link>
            <Link
              to="/admin/dashboard/ownerrequest"
              className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
            >
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
              Owner Requests
            </Link>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-10 md:ml-24 flex  2xl:justify-center gap-10">
        <div className="hidden md:flex flex-col w-[300px] p-3 text-xl  items-center font-medium text-gray-700 gap-5 mt-32">
          <Link
            to="/admin/dashboard/notification"
            className="flex   items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </Link>
          <Link
            to="/admin/dashboard/studentrequest"
            className="flex font-bold text-dblue  items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">person</span>Student
            Requests
          </Link>
          <Link
            to="/admin/dashboard/ownerrequest"
            className="items-center flex gap-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="material-symbols-outlined">real_estate_agent</span>
            Owner Requests
          </Link>
        </div>
        <div className="mt-10 flex flex-col gap-y-3 w-[700px]">
          <p className="text-xl font-medium">Student Requests</p>
          <div className="flex flex-col gap-y-2 text-lg text-gray-800">
            {allPendingUserRequests.map((slots) => {
              console.log(slots);
              return (
                <>
                  {" "}
                  <p className="text-lg font-semibold text-gray-700 text-center">
                    Request Made for room {slots.id} - {slots.room.name}
                  </p>
                  <div className="flex flex-col gap-3 text-lg text-gray-800">
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Student Name</p>
                      <p>{slots.user.name}</p>
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Phone Number</p>
                      <p>{slots.user.phno}</p>
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Age</p>
                      <p>{slots.user.age}</p>
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Admission Letter</p>
                      <p
                        onClick={() => {
                          setFile(slots.college_letter);
                          setFileOpen(true);
                        }}
                        className="cursor-pointer"
                      >
                        Link
                      </p>
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Visa</p>
                      <p
                        onClick={() => {
                          setFile(slots.visa);
                          setFileOpen(true);
                        }}
                        className="cursor-pointer"
                      >
                        Link
                      </p>
                    </div>

                    <div className="flex items-center gap-10">
                      <p className="font-medium">StudentId</p>
                      <p
                        onClick={() => {
                          setFile(slots.id_proof);
                          setFileOpen(true);
                        }}
                        className="cursor-pointer"
                      >
                        Link
                      </p>
                    </div>
                    <div className="flex items-center gap-10">
                      <p className="font-medium">Doc 4</p>
                      <p
                        onClick={() => {
                          setFile(slots.id_proof);
                          setFileOpen(true);
                        }}
                        className="cursor-pointer"
                      >
                        Link
                      </p>
                    </div>
                  </div>
                  <div className="flex ">
                    <button
                      onClick={() => {
                        ApproveRequestedSlot({ slotId: slots.id });
                        getAllPendingUserRequests();
                      }}
                      className="border-2 rounded-md hover:scale-110 transition-transform duration-300 font-semibold text-orange-700 border-gray-400 text-lg mx-auto py-1 px-3"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => {
                        RejectRequestedSlot({ slotId: slots.id });
                        getAllPendingUserRequests();
                      }}
                      className="border-2 rounded-md hover:scale-110 transition-transform duration-300 font-semibold text-orange-700 border-gray-400 text-lg mx-auto py-1 px-3"
                    >
                      Reject
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Dialog
        open={fileopen}
        onClose={handleclosefile}
        className="h-full w-full"
      >
        <DialogTitle>
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={handleclosefile}
          >
            close
          </span>
        </DialogTitle>
        <DialogContent>
          <img src={file} />
        </DialogContent>
      </Dialog>
    </Layouts>
  );
}

export default StudentRequest;
