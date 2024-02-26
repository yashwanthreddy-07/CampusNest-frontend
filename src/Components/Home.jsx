import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";

function Home() {
  useEffect(() => {
    Aos.init();
  });
  const handleleft = () => {
    const reviews = document.getElementById("reviews");
    reviews.scrollLeft = reviews.scrollLeft - 440;
  };
  const handleright = () => {
    const reviews = document.getElementById("reviews");
    reviews.scrollLeft = reviews.scrollLeft + 440;
  };
  const [open, setOpen] = useState(false);
  const handleclose = () => {
    setOpen(false);
  };
  const handlefeedback = () => {
    setOpen(false);
  };
  return (
    <Layouts>
      <div className="">
        <div className="bg-home2 bg-cover bg-bottom  max-w-[1550px] h-[400px] flex flex-col justify-end items-center  ">
          <p className="mb-20 px-16  md:mb-28 text-center w-[400px] md:w-[750px]  text-orange-600 md:text-orange-900 md:brightness-200 text-opacity-100  font-bold text-[16px] md:text-2xl">
            {" "}
            From Campus to Cozy: Your Roommate-Matchmaker Starts Now!
          </p>
          <div className="mb-16 flex items-center border-2  bg-white rounded-lg h-12 px-2  gap-3">
            <span className="material-symbols-outlined">search</span>
            <input
              type="search"
              placeholder="Search location/College name"
              className="w-[350px] md:w-[650px] border-none outline-none focus:border-dblue"
            />
          </div>
        </div>
        <div className=" font-bold  bg-gray-100 text-dblue border-2 mt-20 mx-10  md:mx-72 rounded-3xl border-dblue">
          <div className=" flex p-10 flex-col  items-center justify-center">
            <p className="text-orange-600 md:text-[44px] text-[20px]">
              you got options from us
            </p>
            <div className="flex md:text-[18px]  pt-10 gap-10">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="w-1/3 text-center"
              >
                <span className="material-symbols-outlined text-[44px]">
                  map
                </span>
                <p>Cities 5+</p>
              </div>
              <div
                data-aos="fade-top"
                data-aos-duration="1000"
                className="w-1/3 text-center"
              >
                <span className="material-symbols-outlined text-[44px]">
                  emoji_people
                </span>
                <p>Students Boarded 100+</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="w-1/3 text-center"
              >
                <span className="material-symbols-outlined text-[44px]">
                  bed
                </span>
                <p>Properties Listed 25+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex   md:mx-32 mt-10 flex-wrap p-10">
          <div
            id="forstudents"
            className="text-xl flex flex-col gap-8 md:w-1/2 md:pr-10 md:border-r-2"
          >
            <span className="ml-5 font-medium -rotate-6 p-2 w-36 rounded-[25px] text-center  text-dblue bg-gray-200">
              For Students
            </span>
            <div
              className="flex flex-col gap-5 "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="font-semibold flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px]">
                  devices
                </span>
                Hassel free booking
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Offering a user-friendly online booking process of securing
                accommodation quick and convenient for students
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex flex-col gap-5"
            >
              <p className="font-semibold flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px]">
                  accessibility_new
                </span>
                Find Like Minded People
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Discovering peers who share similar interests is advantageous,
                especially for individuals moving to new cities or countries.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex flex-col gap-5"
            >
              <p className="font-semibold flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px]">
                  school
                </span>
                Campus Proximity
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Discover convenient housing close to your college through
                CampusNest, your ultimate accommodation solution.
              </p>
            </div>
          </div>
          <div
            id="forstudentsimg"
            className="flex flex-col gap-10 flex-1 mt-20 md:mt-14  "
          >
            <img
              src={home1}
              data-aos="flip-right"
              data-aos-duration="1500"
              className="w-[75%] ml-10 "
            />
            <img
              src={home2}
              data-aos="flip-left"
              data-aos-duration="1500"
              className="w-[75%] ml-auto"
            />
          </div>
        </div>
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="border-2 text-center mx-auto  md:w-[650px] rounded-lg text-white font-medium text-xl p-3 bg-orange-600"
        >
          From Campus Hustle to Room Bliss: Your Ideal Space Awaits Here!
        </p>
        <div className="flex   md:mx-32  flex-wrap p-10">
          <div
            id="forstudentsimg"
            className="flex flex-col gap-10 flex-1  md:mt-14 md:pr-10 md:border-r-2 "
          >
            <img
              src={home1}
              data-aos="flip-right"
              data-aos-duration="1500"
              className="w-[75%] ml-auto "
            />
            <img
              src={home2}
              data-aos="flip-left"
              data-aos-duration="1500"
              className="w-[75%] mr-auto"
            />
          </div>
          <div
            id="forstudents"
            className="text-xl mt-10 flex flex-col gap-8 md:w-1/2 md:pl-10"
          >
            <span className="mr-auto font-medium  -rotate-6  p-2 w-36 rounded-[25px] text-center  text-orange-700 bg-gray-200">
              For Owners
            </span>

            <div
              className="flex flex-col gap-5 "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="font-semibold flex items-center gap-3 ">
                <span className="material-symbols-outlined text-[32px]">
                  attach_file
                </span>
                Paperless Approval
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Offer a paperless onboarding to your tenants by collecting KYC
                Documents and more digitally.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex flex-col gap-5"
            >
              <p className="font-semibold flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px]">
                  real_estate_agent
                </span>
                Easy Listing Process
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Simple steps, hassle-free setup: List your accommodation
                effortlessly and reach more guests quickly.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex flex-col gap-5"
            >
              <p className="font-semibold flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px]">
                  share_reviews
                </span>
                Reviews and Reputation
              </p>
              <p className="text-gray-700 font-medium">
                {" "}
                Students reviews build trust, boost reputation, and drive
                bookings on our accommodation website.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-14  md:w-full">
          <p
            id="leftbutton"
            onClick={handleleft}
            className="cursor-pointer hidden md:inline-flex  ml-16 material-symbols-outlined absolute top-1/2  opacity-50 hover:opacity-100 text-[28px] hover:text-[36px]  "
          >
            chevron_left
          </p>
          <div
            id="reviews"
            className="flex overflow-auto mx-2 md:mx-20  scroll-smooth scrollbar-hide "
          >
            <div className="flex gap-x-10 md:mx-10 md:ml-5">
              <div className="border-2 text-[18px] w-[390px] md:w-[400px] py-3 rounded-xl bg-gray-50">
                <div className="flex items-center font-medium  gap-3 border-b-2 px-10 py-2">
                  <img src={home1} className="w-14 h-14 rounded-full" />
                  <p>Username</p>
                  <p className="ml-auto">Posted Date</p>
                </div>
                <p className="px-10 text-justify pt-4 text-[18px] line-clamp-5 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  molestiae cum recusandae non dolorum velit saepe veniam porro
                  similique illo facilis omnis perspiciatis praesentium tenetur
                  quam adipisci, ipsa nemo nisi. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aut qui tenetur rerum porro
                  officia magnam iure fugiat ea, blanditiis aspernatur.
                </p>
                <p className="mx-10 mt-2">Rating &nbsp; 5</p>
              </div>
              {/*dupliacate
               */}
              {/* duplicate */}
              <div className="border-2 text-[18px] w-[400px]  py-3 rounded-xl bg-gray-50">
                <div className="flex items-center font-medium  gap-3 border-b-2 px-10 py-2">
                  <img src={home1} className="w-14 h-14 rounded-full" />
                  <p>Username</p>
                  <p className="ml-auto">Posted Date</p>
                </div>
                <p className="px-10 pt-4 text-[18px] line-clamp-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  molestiae cum recusandae non dolorum velit saepe veniam porro
                  similique illo facilis omnis perspiciatis praesentium tenetur
                  quam adipisci, ipsa nemo nisi. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aut qui tenetur rerum porro
                  officia magnam iure fugiat ea, blanditiis aspernatur.
                </p>
                <p className="mx-10 mt-2">Rating &nbsp; 5</p>
              </div>
              <div className="border-2 text-[18px]  w-[400px] py-3 rounded-xl bg-gray-50">
                <div className="flex items-center font-medium  gap-3 border-b-2 px-10 py-2">
                  <img src={home1} className="w-14 h-14 rounded-full" />
                  <p>Username</p>
                  <p className="ml-auto">Posted Date</p>
                </div>
                <p className="px-10 pt-4 text-[18px] line-clamp-5  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  molestiae cum recusandae non dolorum velit saepe veniam porro
                  similique illo facilis omnis perspiciatis praesentium tenetur
                  quam adipisci, ipsa nemo nisi. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aut qui tenetur rerum porro
                  officia magnam iure fugiat ea, blanditiis aspernatur.
                </p>
                <p className="mx-10 mt-2">Rating &nbsp; 5</p>
              </div>
              <div className="border-2 text-[18px] w-[400px] py-3 rounded-xl bg-gray-50">
                <div className="flex items-center font-medium  gap-3 border-b-2 px-10 py-2">
                  <img src={home1} className="w-14 h-14 rounded-full" />
                  <p>Username</p>
                  <p className="ml-auto">Posted Date</p>
                </div>
                <p className="px-10 pt-4 text-[18px] line-clamp-5  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  molestiae cum recusandae non dolorum velit saepe veniam porro
                  similique illo facilis omnis perspiciatis praesentium tenetur
                  quam adipisci, ipsa nemo nisi. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aut qui tenetur rerum porro
                  officia magnam iure fugiat ea, blanditiis aspernatur.
                </p>
                <p className="mx-10 mt-2">Rating &nbsp; 5</p>
              </div>
              <div className="border-2 text-[18px] w-[400px] py-3 rounded-xl bg-gray-50">
                <div className="flex items-center font-medium  gap-3 border-b-2 px-10 py-2">
                  <img src={home1} className="w-14 h-14 rounded-full" />
                  <p>Username</p>
                  <p className="ml-auto">Posted Date</p>
                </div>
                <p className="px-10 pt-4 text-[18px] line-clamp-5  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  molestiae cum recusandae non dolorum velit saepe veniam porro
                  similique illo facilis omnis perspiciatis praesentium tenetur
                  quam adipisci, ipsa nemo nisi. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aut qui tenetur rerum porro
                  officia magnam iure fugiat ea, blanditiis aspernatur.
                </p>
                <p className="mx-10 mt-2">Rating &nbsp; 5</p>
              </div>
            </div>
          </div>
          <span
            id="rightbutton"
            onClick={handleright}
            className="cursor-pointer hidden md:inline-flex ml-[370px] md:mr-16  material-symbols-outlined absolute top-1/2 md:right-0 opacity-50 hover:opacity-100 text-[28px] hover:text-[36px] "
          >
            chevron_right
          </span>
        </div>
        <span className="flex justify-center mb-14 material-symbols-outlined md:hidden">
          steppers
        </span>
        <div className="flex  items-center  justify-center md:justify-end mb-10 md:mr-24">
          <p>Your feedback means a lot</p>
          <span className="material-symbols-outlined mr-5">
            arrow_right_alt
          </span>
          <button
            onClick={() => setOpen(true)}
            className="border-2 rounde-md px-2 py-1 border-dblue text-orange-700 font-bold hover:scale-110 transition-transform duration-300 hover"
          >
            Feedback
          </button>
        </div>
      </div>
      <Dialog open={open} onClose={handleclose} disa>
        <DialogTitle className="flex items-center gap-5">
          <span
            onClick={handleclose}
            className="cursor-pointer material-symbols-outlined "
          >
            close
          </span>
          <p>Write your feedback</p>
        </DialogTitle>
        <DialogContent>
          <textarea
            placeholder="your feedback"
            className="h-[150px] p-4 w-[300px] focus:scale-110 focus:font-semibold outline-none resize-none"
          />
        </DialogContent>
        <button
          onClick={handlefeedback}
          className="flex items-center gap-3 border-2 w-24 ml-auto mr-5 mb-5  px-2 py-1 bg-dblue text-white hover:scale-110 rounded-md transition-transform duration-300 hover"
        >
          {" "}
          Send <span className="text-md material-symbols-outlined">send</span>
        </button>
      </Dialog>
    </Layouts>
  );
}

export default Home;
