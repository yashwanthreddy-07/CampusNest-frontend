import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import { Link, NavLink, useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { getAllRooms, getRoomDetails } from "../Apis/apicalls";
import { useNavigate } from "react-router-dom";
function Property() {
   const { id } = useParams();
  const [room, setRoom] = useState({});
  const [open, setOpen] = useState(false);
  const [allRooms, setAllRooms] = useState([]);
  const [requestOpen, setRequestOpen] = useState(false);
  const handleclose = () => {
    setOpen(false);
  };
  const handlesubmit = () => {
    setRequestOpen(false);
  };
  const handlerequestClose = () => {
    setRequestOpen(false);
  };
    useEffect(() => {
      Aos.init();
    });
    
  const getRoom = async () => {
    const room = await getRoomDetails({ roomId: id });
    setRoom(room?.room);
  };
  useEffect(() => {
    getRoom();
  }, []);
 
  return (
    <Layouts>
      <div className="md:mx-24 md:my-10 m-5 2xl:mx-56">
        <div className="flex gap-x-2 max-h-[450px] max-w-[1490px] flex-shrink">
          <img
            src={home1}
            className="md:w-1/2 lg:rounded-l-xl md:rounded-l-xl brightness-110 hover:brightness-100"
          />
          <div className="flex flex-col gap-y-2 flex-shrink">
            <img
              src={home1}
              className="w-full brightness-110 hover:brightness-100"
            />
            <img
              src={home2}
              className=" w-full brightness-110 hover:brightness-100"
            />
          </div>
          <div className="flex flex-col gap-y-2 flex-shrink ">
            <img
              src={home2}
              className="w-full brightness-110 hover:brightness-100"
            />
            <img
              src={home1}
              className="w-full brightness-110 hover:brightness-100"
            />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="absolute right-32 bottom-[200px] border-2 text-dblue font-medium rounded-md hover:scale-105 transition-transform duration-300 hover bg-gray-100 w-40 px-2 py-1"
          >
            Show more images
          </button>
        </div>
      </div>
      <div className="my-10 flex flex-wrap md:mx-24 mx-5">
        <div className="flex-shrink md:w-1/2">
          <p className="font-medium text-2xl">{room?.name}</p>
          <div className="text-gray-800 flex gap-5">
            <p>No of bedrooms:{room?.bedrooms}</p>
            <p>No of bathrooms:{room?.bathrooms}</p>
            <p>People allowed to stay :{room?.slots}</p>
          </div>
          <p className="h-[100px] my-5 border-2 p-2 text-justify  text-wrap">
            {room?.description}
          </p>
          <p className="font-medium text-xl">Address:</p>
          <div className="flex flex-col gap-2 text-gray-800">
            <p>{room?.address}</p>
            <p>{room?.state}</p>
            <p>{room?.country}</p>
            <p>{room?.pincode}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-xl font-medium mt-10 md:ml-10">
          <div className="flex items-center  ">
            <span className="material-symbols-outlined">location_on</span>
            See On Maps{" "}
            <NavLink className="underline text-lg  ml-5 text-dblue">
              Link
            </NavLink>
          </div>
          <p className="ml-2">Owned by : {room?.owner?.name}</p>
          <div className="ml-2 flex items-center">
            Request to book Your Room
            <span className="material-symbols-outlined">arrow_forward</span>
            <button
              className="ml-5 w-28 border-2 py-1 px-2 border-gray-300 bg-orange-700 text-white rounded-md hover:scale-110 transition-transform duration-300 hover"
              onClick={() => {
                setRequestOpen(true);
              }}
            >
              Request
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleclose}
        fullScreen
        className="mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <DialogTitle>
          <span
            onClick={handleclose}
            className="cursor-pointer material-symbols-outlined text-[44px]"
          >
            expand_more
          </span>
        </DialogTitle>
        <DialogContent className="flex flex-shrink gap-2 flex-wrap">
          <img src={home1} className="w-[32%] h-[250px]" />
          <img src={home2} className="w-[32%] h-[300px]" />
          <img src={home1} className="w-1/3 h-[300px]" />
          <img src={home2} className="w-[32%] h-[300px]" />
          <img src={home2} className="w-1/3 h-[300px]" />
          <img src={home1} className="w-[32%] h-[300px]" />
          <img src={home2} className="w-1/3 h-[300px]" />
          <img src={home1} className="w-[32%] h-[300px]" />
          <img src={home2} className="w-1/3 h-[300px]" />
          <img src={home1} className="w-1/3 h-[300px]" />
        </DialogContent>
      </Dialog>
      <Dialog
        open={requestOpen}
        onClose={handlerequestClose}
        data-aos="fade-up"
        data-aos-duration="500"
        hideBackdrop
      >
        <DialogTitle className="flex w-[450px] items-center">
          <span
            className="material-symbols-outlined text-[32px] cursor-pointer"
            onClick={handlerequestClose}
          >
            close
          </span>
          <p className="mx-auto ">Fill the form To Proceed</p>
        </DialogTitle>
        <DialogContent className="text-lg  text-justify font-medium   ">
          <p className="flex gap-2">
            Student Name: &nbsp; <p>Name</p>
          </p>
          <p className="flex gap-2">
            College Name: &nbsp; <p>College_Name</p>
          </p>
          <p className="flex gap-16">
            Course: &nbsp; <p>Course_Name</p>
          </p>
          <div className="flex text-[14px]  mt-5">
            <p className="flex items-center w-1/2 gap-1">
              {" "}
              <span className="material-symbols-outlined ">attach_file</span>
              College Admission letter:
            </p>
            <input type="file" className="ml-5" />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              {" "}
              <span className="material-symbols-outlined ">
                branding_watermark
              </span>
              ID Proof:
            </p>
            <input type="file" className="ml-5" />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              <span className="material-symbols-outlined ">flight</span>Visa
            </p>
            <input type="file" className="ml-5" />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              <span className="material-symbols-outlined ">
                document_scanner
              </span>
              Other documents
            </p>
            <input type="file" className="ml-5" />
          </div>
          <div className="flex items-center mt-5 gap-x-4">
            Expected to Join:
            <input type="date" className=" outline-none" />
          </div>
        </DialogContent>
        <button
          onClick={handlesubmit}
          className="w-40 px-2 py-1 hover:scale-105 transition-transform duration-300 border-gray-300 bg-orange-700 text-white font-medium border-2 ml-auto mr-5 mb-10"
        >
          Submit Request
        </button>
      </Dialog>
    </Layouts>
  );
}

export default Property;
