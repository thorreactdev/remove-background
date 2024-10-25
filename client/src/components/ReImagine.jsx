import Protected from "@/secure/Protected";
import Upload from "./Upload";

const ReImagine = () => {
  return (
    <div className="grid md:grid-cols-2 mt-10 md:mt-20 md:gap-20 px-3 md:px-2 items-center justify-center">
      <div className="flex flex-col gap-6 lg:mt-20 md:mt-10 px-6 md:px-0">
        <h1 className="text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-extrabold leading-[1.2]">
          Transform Your <br className="hidden md:block" />
          <span className="bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent">
            Images
          </span>{" "}
          Beyond
          <br className="hidden md:block" />
          Ordinary for free.
        </h1>
        <p className="text-xs xl:text-base lg:text-sm text-regal_blue font-medium">
          Transform your photos with creative effects and new backgrounds.
          Discover endless ways to enhance your images
        </p>
        <div>
          <Protected>
            <Upload apiLink="/api/reimagine" />
          </Protected>
        </div>
      </div>
      <div className="md:order-first">
        <figure>
          <img
            src="/4bhk.jpg"
            alt="background remove image example"
            title="Background Remove Image"
            className="w-full h-full rounded-md mt-10 md:mt-0"
          />
        </figure>
      </div>
    </div>
  );
};

export default ReImagine;
