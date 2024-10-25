import Protected from "@/secure/Protected";
import Upload from "./Upload";

const ProductPhotography = () => {
  return (
    <div className="grid md:grid-cols-2 mt-10 md:mt-20 md:gap-20 px-3 md:px-0">
      <div className="flex flex-col gap-6 lg:mt-20 md:mt-10 px-6 md:px-0">
        <h1 className="text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-extrabold leading-[1.2]">
          Convert Your
          <br className="hidden md:block" />
          <span className="bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent">
            Photos
          </span>{" "}
          Into
          <br className="hidden md:block" />
          Product Images for free.
        </h1>
        <p className="text-xs xl:text-base lg:text-sm text-regal_blue font-medium">
          The API transforms any picture of your object into a professional
          product picture complete with a shadow as if it was taken in a studio
        </p>
        <div>
          <Protected>
            <Upload apiLink="/api/product" />
          </Protected>
        </div>
      </div>
      <div className="md:order-first">
        <figure>
          <img
            src="/shoes.jpeg"
            alt="background remove image example"
            title="Background Remove Image"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductPhotography;
