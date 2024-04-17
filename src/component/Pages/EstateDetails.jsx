import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import ImageSlider from "./SlideChack";
import Sliders from "./Sliders";
import { CiLocationOn } from "react-icons/ci";
import { GiRapidshareArrow } from "react-icons/gi";
import Leaflet from "../Unity/Leaflet";


const EstateDetails = () => {
  const { user } = useContext(AuthContext);

  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);

  console.log(estate);
  return (
    <div className="p- py- ">
      <Helmet>
        <title>Crestview | details</title>
      </Helmet>
      <div className=" image-full bg-auto bg-cover bg-center  bg-[url('/slider/1.jpg')] " data-aos="fade-left">
      <div className="h-96 w-full items-center flex justify-center image-full bg-cover  items-center flex bg-[#1a1919a6] " >
      <h1 className="lg:text-9xl text-7xl text-center mb-5 font-bold " data-aos="fade-right">SEE PROPERTY DETAILS</h1>
      </div>
      </div>
     
     <div className="max-w-[1280px] mx-auto ">
     {/* <hr className=" mx-auto mb-1 border-gray-500" />
      <hr className=" mx-auto mb-10 border-gray-500" /> */}

      <div className="flex flex-col gap-4 bg-gray-950 mt-5  p- py- shadow-2xl shadow-neutral-950 min-h-screen">
        <div className="lg:h-[600px]" data-aos="fade-right">
          <img className="w-full lg:h-[600px]" src={estate.image} alt="" />
        </div>

        <div className=" bg-gray-950 p-6 text-2xl  space-y-8" data-aos="fade-up"
     data-aos-duration="3000">
          <h1 className="text-5xl font-bold" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">{estate.title}</h1>
          <hr className="mb-1 border-gray-500" />
          <div className="line-clamp-6 leading-10">
            <h1 className="text-3xl font-bold">Description:</h1>
            <p className="ml-4"> {estate.description}</p>
          </div>
    <div className="lg:flex">
    <div className="flex-1">
         <p>
            <span className="text-3xl font-bold">Category :</span>{" "}
            {estate.segment}
          </p>
          <h1>
            <span className="text-3xl font-bold ">FAcilities : </span>{" "}
            {estate.facilities}
          </h1>
          <p className="ml-4"></p>
          <h1>
            <span className="text-3xl font-bold ">Area :</span> <span className="flex items-center gap-2"><GiRapidshareArrow /> {estate.area}</span>
          </h1>
          <p></p>
          <h1 className="text-3xl font-bold underline">Location</h1>
          <p className="flex items-center gap-2"><CiLocationOn /> {estate.location}</p>
         </div>
          <div className="flex-1">
            <Leaflet></Leaflet>
          </div>
    </div>
        </div>
      </div>
     </div>
      
    </div>
  );
};

export default EstateDetails;
