import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { originalImage, processedImage } = location.state || {};
  console.log("originalImage", originalImage);
  console.log("processedImage", processedImage);

  if (!originalImage || !processedImage) {
    return <div className="flex flex-col gap-8 items-center justify-center">
      <img src="/surprise_women.jpeg" alt="Suprise Women" className="w-full md:w-[450px]"/>
      <span className="text-black font-semibold text-xl">
        Aww, You have not selected any image , go back
      </span>
    </div>;
  }
  return (
    <div className="p-3">
    <div className="shadow-xl my-10 bg-white md:border rounded-md p-10">
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center space-x-8">
        {/* Original Image */}
        <div className="flex flex-col gap-4 cursor-pointer">
          <h2 className="text-xl font-bold text-regal_blue">Original Image</h2>
          <img
            src={originalImage}
            alt="Original"
            className="w-full xl:w-[480px] h-auto rounded-md"
          />
        </div>

        {/* Processed Image (Background Removed) */}
        <div className="flex flex-col gap-4 cursor-pointer">
          <h2 className="text-xl font-bold text-regal_blue">Processed Image</h2>
          <div className="bg-[url('/bg_layer.png')] bg-cover bg-no-repeat bg-center overflow-hidden rounded-md ">
          <img
            src={processedImage}
            alt="Background Removed"
            className="w-full xl:w-[480px] h-auto border rounded-md"
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-end mt-5">
      <Link to="/">
      <Button variant="destructive" size="lg" className="font-semibold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]">
          Try Another Image
        </Button>
      </Link>
      <a href={processedImage} download>
        <Button variant="destructive" size="lg" className="font-semibold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]">
          Download
        </Button>
      </a>
      </div>
    </div>
    </div>
  );
};

export default ResultPage;
