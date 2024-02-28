import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import home1 from "../assets/home1.jpeg";
import home2 from "../assets/home2.jpeg";
import owner2 from "../assets/owner2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { sendfeedback, getreviews } from "../Apis/apicalls";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  useEffect(() => {
    Aos.init();
  });
  const handleleft = () => {
    const reviews = document.getElementById("reviews");
    reviews.scrollLeft = reviews.scrollLeft - 500;
  };
  const handleright = () => {
    const reviews = document.getElementById("reviews");
    reviews.scrollLeft = reviews.scrollLeft + 500;
  };
  const [open, setOpen] = useState(false);
  const handleclose = () => {
    setOpen(false);
  };

  const handlefeedbackchange = (e) => {
    setFeedback(e.target.value);
  };
  const handlefeedback = async () => {
    setOpen(false);

    const response = await sendfeedback({ feedback, rating });
    console.log(response);
    if (response.success) {
      setOpen(false);

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
  };

  const getReview = async () => {
    const review = await getreviews();
    setReviews(review);
  };
  useEffect(() => {
    getReview();
  }, []);

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
              onKeyDown={(e) => {
                e.key === "Enter" &&
                  navigate("/searchproperty", {
                    state: { searchQuery: e.target.value },
                  });
              }}
            />
          </div>
        </div>
        <div className=" font-bold  bg-gray-100 text-dblue border-2 mt-20 mx-10  xl:mx-72 rounded-3xl border-dblue">
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
        <div className="flex  md:mx-14 xl:mx-32 mt-10 flex-wrap p-10">
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
            className="flex flex-col xl:gap-10 gap-44 flex-1 mt-20 md:mt-14  "
          >
            <img
              src={home1}
              data-aos="flip-right"
              data-aos-duration="1500"
              className="xl:w-[75%] w-[500px] ml-10 "
            />
            <img
              src={home2}
              data-aos="flip-left"
              data-aos-duration="1500"
              className="xl:w-[75%] w-[500px] xl:ml-auto ml-10"
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
        <div className="flex  md:mx-14 xl:mx-32  flex-wrap p-10">
          <div
            id="forstudentsimg"
            className="flex flex-col md:gap-44 xl:gap-10 flex-1  md:mt-14 md:pr-10 md:border-r-2 "
          >
            <img
              src={home1}
              data-aos="flip-right"
              data-aos-duration="1500"
              className="xl:w-[75%] w-[500px] mr-8"
            />
            <img
              src={owner2}
              data-aos="flip-left"
              data-aos-duration="1500"
              className="xl:w-[75%] w-[500px] mr-24"
            />
          </div>
          <div
            id="forowners"
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
        <div
          id="reviews"
          className="xl:mx-24  mx-auto  md:mx-14 w-[340px] md:w-[720px] lg:w-[900px] xl:w-[1280px]   mt-2 mb-2 scrollbar scrollbar-default xl:scrollbar-hide flex items-center justify-between overflow-x-auto"
        >
          <span
            onClick={handleleft}
            className="cursor-pointer hidden xl:flex -ml-8   material-symbols-outlined absolute  border-2 rounded-full  w-7 opacity-75 bg-gray-400 hover:opacity-100 hover:text-[28px] hover:w-8  "
          >
            chevron_left
          </span>
          <div className=" flex gap-5 items-center justify-center ">
            {reviews?.map((review, key) => {
              return (
                <div className="w-[340px]  lg:w-[300px] border-orange-400  border-2 h-[300px] rounded-xl ">
                  <div className="flex p-3 items-center justify-between border-b-2">
                    <img
                      src={review.user.profile_image}
                      className="w-12 rounded-full"
                    />
                    <div className="">
                      <p className="font-semibold text-dblue text-[16px]">
                        {review.user.name}
                      </p>
                      <p className="font-semibold text-dblue text-[14px]">
                        {" "}
                        Posted On : 22-02-2024
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-5 text-[16px] h-[130px] font-medium p-[5px] text-justify">
                    {review.feedback}
                  </p>
                  <div className="font-bold p-[5px]">
                    Rating :{" "}
                    <span className="text-dblue ">{review.rating}</span>
                  </div>
                  <div className="font-semibold p-[5px] ">
                    Stayed At:
                    <span className="text-dblue ml-5">ABHK Villas</span>
                  </div>
                </div>
              );
            })}
          </div>
          <span
            onClick={handleright}
            className="cursor-pointer  material-symbols-outlined md:right-12 xl:right-[110px] absolute hidden  xl:flex border-2 rounded-full  w-7 opacity-75 bg-gray-400 hover:opacity-100 hover:text-[28px] hover:w-8  "
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
          Send <span className="text-md material-symbols-outlined">send</span>
        </button>
      </Dialog>
    </Layouts>
  );
}

export default Home;
