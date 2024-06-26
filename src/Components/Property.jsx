import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import { Link, NavLink, useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  canUserGiveFeedback,
  getAllRooms,
  getRoomDetails,
  getUserDetails,
  getreviewsByRoom,
  sendfeedback,
} from "../Apis/apicalls";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
function Property() {
  const [userData, setUserData] = useState({});
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const getUser = async () => {
    const userdetails = await getUserDetails();
    setUserData(userdetails.user);
  };
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [open, setOpen] = useState(false);
  const [allRooms, setAllRooms] = useState([]);
  const [requestOpen, setRequestOpen] = useState(false);
  const [doj, setDoj] = useState();
  const [docs, setDocs] = useState();
  const [collegeLetter, setcollegeLetter] = useState();
  const [idProof, setIdProof] = useState();
  const [visa, setVasa] = useState();
  const [reviews, setReviews] = useState([]);
  const [canFeedback, setCanFeedback] = useState(false);

  const handleclose = () => {
    setOpen(false);
  };

  const [feedbackdialog, setFeedbackDialog] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handlefeedbackchange = (e) => {
    setFeedback(e.target.value);
  };
  const handlefeedback = async () => {
    setFeedbackDialog(false);

    const response = await sendfeedback({ feedback, rating, roomid: id });
    console.log(response);
    if (response.success) {
      setFeedbackDialog(false);

      toast.success("Feedback sent", {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error(response.message, {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    }
    getReview();
  };

  const handlesubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("doj", doj);
      formDataToSend.append("college_letter", collegeLetter);
      formDataToSend.append("id_proof", idProof);
      formDataToSend.append("visa", visa);
      formDataToSend.append("docs", docs);

      formDataToSend.append("roomId", id);
      console.log(doj, docs, "dlfkg", formDataToSend);
      const response = await fetch(
        "https://campusnest-backend-uzto.onrender.com/request-room",
        {
          method: "POST",
          headers: {
            "x-auth-token": localStorage.getItem("user-token"),
          },
          body: formDataToSend,
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success("Room Requested Successfully");

        navigate("/user/dashboard/bookings");
        setRequestOpen(false);
      } else {
        // setOpen(false);
        toast.error(data.error);
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
    }
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
    setImages(room?.room.images);
  };
  const getReview = async () => {
    const review = await getreviewsByRoom({ roomid: id });
    setReviews(review);
  };

  const canGiveFeedback = async () => {
    const res = await canUserGiveFeedback({ roomid: id });
    setCanFeedback(res.success);
  };
  useEffect(() => {
    getRoom();
    getUser();
    getReview();
    canGiveFeedback();
  }, []);

  return (
    <Layouts>
      <div className="md:mx-24 md:my-10 m-5 2xl:mx-56">
        <div className="flex gap-x-2 flex-shrink max-h-[450px] w-full">
          <div className="md:w-1/2 w-full ">
            <img src={images[0]} className="w-full h-full" />
          </div>
          <div className="md:w-1/2 md:flex flex-wrap hidden  ">
            <img src={images[1]} className="w-1/2 p-[2px] h-1/2 " />
            <img src={images[2]} className="w-1/2 h-1/2 p-[2px]" />
            <img src={images[3]} className="w-1/2 h-1/2 p-[2px]" />
            <img src={images[4]} className="w-1/2 h-1/2 p-[2px]" />
          </div>
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
            <Link
              to={room.locationurl}
              className="cursor-pointer underline text-lg  ml-5 text-dblue"
            >
              Link
            </Link>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="  border-2 text-dblue font-medium rounded-md hover:scale-105 transition-transform duration-300 hover bg-gray-100 w-52 px-2 py-1"
          >
            Show more images
          </button>
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

      <div className=" flex gap-5 items-center justify-center ">
        {reviews?.map((review, key) => {
          return (
            <div className="w-[340px]  lg:w-[300px] border-orange-400  border-2 hover:h-auto h-[250px] rounded-xl ">
              <div className="flex p-3 items-center justify-between border-b-2">
                <img
                  src={review.user.profile_image}
                  className="w-12 rounded-full"
                />
                <div className="">
                  <p className="font-semibold text-dblue text-[16px]">
                    {review.user.name}
                  </p>
                  <p className="font-semibold text-end text-dblue text-[14px]">
                    {" "}
                    {review.created_at.split("T")[0]}
                  </p>
                </div>
              </div>
              <p className="line-clamp-5 hover:line-clamp-none hover:h-auto text-[16px] h-[130px] font-medium p-[5px] text-justify">
                {review.feedback}
              </p>
              <div className="font-bold p-[5px]">
                Rating : <span className="text-dblue">{review.rating}</span>
              </div>
            </div>
          );
        })}
      </div>
      {canFeedback && (
        <>
          <div className="flex  items-center  justify-center md:justify-end mb-10 md:mr-24">
            <p>Your feedback means a lot</p>
            <span className="material-symbols-outlined mr-5">
              arrow_right_alt
            </span>
            <button
              onClick={() => setFeedbackDialog(true)}
              className="border-2 rounde-md px-2 py-1 border-dblue text-orange-700 font-bold hover:scale-110 transition-transform duration-300 hover"
            >
              Feedback
            </button>
          </div>

          <Dialog
            open={feedbackdialog}
            onClose={() => setFeedbackDialog(false)}
            disa
          >
            <DialogTitle className="flex items-center gap-5">
              <span
                onClick={() => setFeedbackDialog(false)}
                className="cursor-pointer material-symbols-outlined "
              >
                close
              </span>
              <p>Write your feedback</p>
            </DialogTitle>
            <DialogContent>
              <textarea
                placeholder="your feedback"
                onChange={handlefeedbackchange}
                className="h-[150px] p-4 w-[300px] mb-1 focus:scale-110 focus:font-semibold outline-none resize-none"
              />
              <div className="flex items-center gap-2">
                <label className="text-dblue font-semibold">
                  Giver your rating from on scale of 5
                </label>
                <input
                  required={true}
                  type="number"
                  min="0"
                  className="w-12 border-gray-400 border-2 focus:scale-110 focus:font-semibold outline-none"
                  max="5"
                  step="0"
                  onChange={(e) => {
                    if (e.target.value >= 5) e.target.value = 5;
                    setRating(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <button
              onClick={handlefeedback}
              className="flex items-center gap-3 border-2 w-24 ml-auto mr-5 mb-5  px-2 py-1 bg-dblue text-white hover:scale-110 rounded-md transition-transform duration-300 hover"
            >
              {" "}
              Send{" "}
              <span className="text-md material-symbols-outlined">send</span>
            </button>
          </Dialog>
        </>
      )}
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
          {images.map((img) => {
            return <img src={img} className="w-[450px]" />;
          })}
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
            Student Name: &nbsp; <p>{userData?.name}</p>
          </p>
          <p className="flex gap-2">
            College Name: &nbsp; <p>{userData?.college_name}</p>
          </p>
          <p className="flex gap-16">
            Course: &nbsp; <p>{userData?.course}</p>&emsp;
          </p>
          <p className="text-[12px]">Note: File formats-jpeg,png</p>
          <div className="flex text-[14px]  mt-5">
            <p className="flex items-center w-1/2 gap-1">
              {" "}
              <span className="material-symbols-outlined ">attach_file</span>
              College Admission letter:*
            </p>
            <input
              type="file"
              required={true}
              onChange={(e) => setcollegeLetter(e.target.files[0])}
              className="ml-5"
            />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              {" "}
              <span className="material-symbols-outlined ">
                branding_watermark
              </span>
              ID Proof:*
            </p>
            <input
              type="file"
              required={true}
              className="ml-5"
              onChange={(e) => setIdProof(e.target.files[0])}
            />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              <span className="material-symbols-outlined ">flight</span>Visa*
            </p>
            <input
              type="file"
              required={true}
              className="ml-5"
              onChange={(e) => setVasa(e.target.files[0])}
            />
          </div>
          <div className="flex text-[14px] mt-5">
            <p className="flex items-center w-1/2 gap-1">
              <span className="material-symbols-outlined ">
                document_scanner
              </span>
              Other documents
            </p>
            <input
              type="file"
              className="ml-5"
              onChange={(e) => setDocs(e.target.files[0])}
            />
          </div>
          <div className="flex items-center mt-5 gap-x-4">
            Expected to Join:
            <input
              type="date"
              className=" outline-none"
              onChange={(e) => setDoj(e.target.value)}
            />
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
