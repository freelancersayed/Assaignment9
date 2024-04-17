import React from "react";

const Self = () => {
  return (
    <div>
      <div className=" py-12 w-full bg-black items-center flex mb-4 px-4">
        <div className="max-w-[1280px] mx-auto justify-center items-center lg:flex gap-6">
          <div
            className=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="200"
          >
            <img
              className="rounded-full lg:w-[480px]  border border-8"
              src="/unitypc/self.png"
              alt=""
            />
          </div>
          <div
            className=""
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-duration="200"
          >
            <h1 className="text-7xl font-bold">
              LET US LOOK AFTER YOUR PROPERTY
            </h1>
            <p className="text-4xl text-red-400 max-w-[700px] mt-2">
              Call us on 01702 443 555 or{" "}
              <a className="underline text-green-600" href="/contact">
                click here
              </a>{" "}
              contact us to arrange a chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;
