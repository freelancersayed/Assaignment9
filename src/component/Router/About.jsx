import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Leaflet from "../Unity/Leaflet";
import 'animate.css';

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Crestview | about</title>
      </Helmet>
      <div
        className=" image-full bg- bg-cover bg-center  bg-[url('/unitypc/Rc.jpg')] "
        data-aos="fade-left"
      >
        <div className="h-96 w-full items-center flex justify-center image-full bg-cover animate__swing  items-center flex bg-[#1a1919a6] ">
          <h1
            className="lg:text-9xl text-7xl text-center mb-5 font-bold "
            data-aos="fade-right"
          >
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="flex mt-5 max-w-[1280px] mx-auto gap-4 ">
        <div className="flex-1 w-full h-[500px]">
            <img className="w-full h-full" src="/unitypc/R.jpg" alt="" />
        </div>
        <div className="flex-1 bg-black p-4 text-2xl">
           <h1 className="text-5xl font-bold">Experience since 2010</h1>
           <br />
           <hr />
           <br />
           <p>We have been working since 2010 to be sure you are getting the best MyHome service possible.</p>
           <br />
           <p>MyHome aims to unite MyHome brokers to provide their clients and partners with the top-notch level of brokerage services throughout the Bangladesh.</p>
           <br /> <br />
           <button className="btn btn-error text-white font-bold"><Link to="*">GET IN TOUCh</Link></button>
        
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className=" bg-orange-400">
        <h1 className="text-6xl text-center font-bold py-5 text-black animate__animated animate__bounce">Our towns and villages</h1>
        </div>
      <Leaflet></Leaflet>
      </div>
    </div>
  );
};

export default About;
