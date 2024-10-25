// import Upload from "@/components/Upload";
// import Protected from "@/secure/Protected";
import Category from "@/components/Category";

const MainLandingPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 mt-10 md:mt-20 md:gap-20 px-4 md:px-4">
        <div className="flex flex-col gap-6 lg:mt-20 md:mt-10 px-6 md:px-0">
          <h1 className="text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-extrabold leading-[1.2]">
            Instant BG <br className="hidden md:block" />
            <span className="bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent">
              Removal
            </span>{" "}
            & Image{" "}
            <span className="bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199] bg-clip-text text-transparent cursor-pointer">
              Transformation
            </span>{" "}
            <br className="hidden md:block" />
            for free.
          </h1>
          <p className="text-xs xl:text-base lg:text-sm text-regal_blue font-medium">
            Remove backgrounds in seconds and transform your images into
            something new. Perfect for personal, business, or creative projects
          </p>
          {/* <div>
          <Protected>
          <Upload/>
          </Protected>
        </div> */}
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
      <Category />
    </div>
  );
};

export default MainLandingPage;
