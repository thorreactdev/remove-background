import { useState } from "react";

const Slider = () => {
    const[sliderPostion , setSliderPostion] = useState(50);
    const handleSliderChange = (e)=>{
        setSliderPostion(e.target.value);
    }
  return (
    <div className="px-3 my-12 lg:my-28">
      <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-regal_blue capitalize">
        Remove Background With High{" "}
        <br className="hidden md:block lg:block xl:block 2xl:hidden" /> Quality and
        Accuracy
      </h2>
      <div className="relative w-full  overflow-hidden mx-auto rounded-xl mt-10">
        <img className="w-full" src="/yes_bg.png" alt="animated slider to remove background" style={{ clipPath : `inset(0 ${100.2 - sliderPostion}% 0 0)`}}/>
        <img className="absolute top-0 left-0 w-full" src="/no_bg.png" alt="animated slider to remove background" style={{ clipPath : `inset(0 0 0 ${sliderPostion}%)`}}/>
        <input className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider" type="range" min={0} max={100} value={sliderPostion} onChange={handleSliderChange} />
      </div>
    </div>
  );
};

export default Slider;
