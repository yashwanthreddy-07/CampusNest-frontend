import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import home1 from "../assets/home1.jpeg";
import { useNavigate } from "react-router-dom";
import { getAllRooms } from "../Apis/apicalls";
import Aos from "aos";
import "aos/dist/aos.css";
function SearchProperty() {
  const [allRooms, setAllRooms] = useState([]);
  const handlesubmit = () => {};
  const navigate = useNavigate();
  const [filteroption, seFilterOption] = useState("");
  const getRooms = async () => {
    const res = await getAllRooms();
    setAllRooms(res.rooms);
    // const initialIndices = res.rooms.reduce((acc, room, index) => {
    //   acc[index] = 0;
    //   return acc;
    // }, {});
    // setCurrentImageIndices(initialIndices);
  };

  useEffect(() => {
    getRooms();
    Aos.init();
  });
  return (
    <Layouts>
      <div className="md:mx-24 mx-3 my-10">
        <div className="flex justify-center items-center  md:gap-x-10 gap-x-5 flex-shrink ">
          <p className=" hidden   md:inline-flex font-medium underline cursor-pointer">
            See our Recommendations
          </p>
          <div className="flex  py-2 px-2 rounded-lg  items-center border-2 w-[500px]  gap-3 text-lg font-normal">
            <span className="material-symbols-outlined ">search</span>
            <input
              type="search"
              onSubmit={handlesubmit}
              className="outline-none w-full "
            />
          </div>
          <span
            className="cursor-pointer material-symbols-outlined"
            onClick={() => {
              document.getElementById("filter").classList.toggle("hidden");
            }}
          >
            filter_list
          </span>
          <span
            id="filteroption"
            className="-ml-10 font-medium md:inline hidden"
          >
            {filteroption}
          </span>
          <div
            id="filter"
            onMouseLeave={() => {
              document.getElementById("filter").classList.add("hidden");
            }}
            className="hidden  absolute md:right-44 right-12 top-28  flex  flex-col gap-y-2 bg-gray-100 p-2 rounded-md hover:scale-110 transition-transform duration-300x"
          >
            <p
              className="cursor-pointer hover:underline"
              onClick={() => {
                document.getElementById("filter").classList.add("hidden");
                seFilterOption("Sort by price:low to high");
              }}
            >
              Sort by price:low to high
            </p>
            <p
              onClick={() => {
                document.getElementById("filter").classList.add("hidden");
                seFilterOption("Sort by price:low to high");
              }}
              className="cursor-pointer hover:underline"
            >
              Sort by price:high to low
            </p>
            <p
              onClick={() => {
                document.getElementById("filter").classList.add("hidden");
                seFilterOption("Newly posted");
              }}
              className="cursor-pointer hover:underline"
            >
              Newly posted
            </p>
            <p
              onClick={() => {
                document.getElementById("filter").classList.add("hidden");
                seFilterOption("");
              }}
              className="cursor-pointer hover:underline"
            >
              None
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-shrink mt-10  mx-10">
          {allRooms?.map((room, index) => {
            return (
              <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="md:w-1/2 lg:w-1/3 2xl:w-1/4 flex flex-col gap-y-3 font-medium text-[20px] p-3 mb-10"
          >
            <img src={home1} className="w-full" />
            <p>Room Title</p>
            <p className="font-normal text-sm text-gray-600 line-clamp-3 h-[63px]">
              Room description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam eos temporibus omnis animi quas
              provident nemo dicta sed. Aperiam eligendi magnam accusantium
              labore maiores. Reiciendis.
            </p>
            <p className="text-gray-600 text-lg">Distance</p>
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
            <button
              onClick={() => {
                navigate("/property");
              }}
              className="border-2 w-[75%] mx-auto rounded-md bg-gray-100 shadow-lg text-dblue mt-3 hover:scale-110 transition-transform duration-300"
            >
              Check this property
            </button>
          </div>
            )
          })}
          
         
          
        </div>
      </div>
    </Layouts>
  );
}

export default SearchProperty;
