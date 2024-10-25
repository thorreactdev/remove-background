// import React from "react";
// import { Button } from "./ui/button";
import steps from "@/utils/steps_to_download.json";
import Upload from "./Upload";
import Protected from "@/secure/Protected";

const HeroSection = () => {
  return (
    <div>
    <div className="grid md:grid-cols-2 mt-10 md:mt-20 md:gap-20 px-3 md:px-0">
      <div className="flex flex-col gap-6 lg:mt-20 md:mt-10 px-6 md:px-0">
        <h1 className="text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-extrabold leading-[1.2]">
          Remove the <br className="hidden md:block" />
          <span className="bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="hidden md:block" />
          images for free.
        </h1>
        <p className="text-xs xl:text-base lg:text-sm text-regal_blue font-medium">
          Remove backgrounds instantly with our AI-powered tool. Upload your
          image, and watch the magic happen.
        </p>
        <div>
          <Protected>
          <Upload apiLink="/api/remove-bg"/>
          </Protected>
        </div>
      </div>
      <div className="md:order-first">
        <figure>
          <img
            src="/header_img.png"
            alt="background remove image example"
            title="Background Remove Image"
          />
        </figure>
      </div>
      </div>

      {/* Steps To Remove and download the image with background */}
      <div className="px-3 my-12 lg:my-28">
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-regal_blue capitalize">Steps to remove background <br className="hidden md:block lg:block xl:block 2xl:hidden"/> image in seconds</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {steps?.steps?.map((item)=>(
            <div key={item.step} className="flex flex-col gap-4 shadow-xl bg-white p-6 border rounded-md">
              <p className="font-semibold text-regal_blue text-xl">{item.title}</p>
              <span className="text-xs md:text-base text-regal_blue">
                {item?.description}
              </span>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default HeroSection;
