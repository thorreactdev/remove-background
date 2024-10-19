import React from "react";
import { Button } from "./ui/button";
import steps from "@/utils/steps_to_download.json";

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
          <input type="file" hidden />
          <Button
            size="lg"
            className="flex gap-2 items-center font-bold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload Image
          </Button>
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
              <span className="text-xs md:text-base">
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
