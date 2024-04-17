import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
const Estate = ({children}) => {

  const {user, } = useContext(AuthContext);
  const [proparty, setProparty] = useState([]);
  const [hover, setHover] = useState(false)

  // if(loader){
  //   return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
  //  }

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProparty(data));
  }, []);

  console.log(proparty);

 

  
 


  return (
    <section className="w-full bg-black py-6 mb-4  bg-gradient-to-r from-[#2f78ff57] to-transparent">
    
      <div className="w-full ">
      <div className="divider
       divider-secondary lg:text-5xl text-4xl  font-extrabold font-mono py-10 " data-aos="fade-right"><span className="text-orange-400">Featured</span> Properties</div>
      <div className="my-5  bg-cover max-w-[1280px] mx-auto">
      <div className="bg-">
      <hr className="mb-4" />
      <div className="grid md:grid-cols-3 gap-6">
        {proparty.map((data) => (
          <div className="card-div justify-center items-center  px-6 py-4  border-gray-500 space-y-5 bg-gray-900 " data-aos="fade-left">
            <div className="h-60  bg-gray-700 justify-center flex rounded-md ">
              <img className="hover:-mt- origin-center w-full origin-top hover:opacity-90 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." src={data.image} alt="" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-white">{data.title}</h1>
              {/* <p>{data.description}</p> */}
              <hr className="my-2 border-gray-700" />

              <ul className="">
                <li className="text-xl font-bold">Facilities</li>
                {data.facilities.map((fData) => (
                  <li className="ml-5 list-disc">{fData}</li>
                ))}
              </ul>
              <hr className="my-2 border-gray-700" />
              <div className="flex justify-between">
                <p>{data.segment}</p>
                <p className="text-red-500 font-bold">{data.status}</p>
              </div>

              <div className="text-center mt-5">
                 <Link   to={`/estate/${data.id}`} className="btn detailBtn bg-green-600 font-bold text-white btn-sm"> View Property</Link>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Estate;
