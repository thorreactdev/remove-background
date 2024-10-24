import test from "@/utils/customer_testimonial.json";

const TestimonialSection = () => {
  return (
    <div className="px-3 my-12 lg:my-28">
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-regal_blue capitalize">Customer Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {test?.testimonials?.map((item , index)=>(
            <div key={index} className="flex flex-col gap-10 shadow-xl bg-white p-8 border rounded-md cursor-help">
              <span className="text-xs md:text-sm text-regal_blue font-medium">
                {item?.testimonial}
              </span>
              <div className="flex items-center gap-4">
                <figure>
                    <img src={item?.image} alt="Customer Image" className="w-12" />
                </figure>
                <div>
                    <h3 className="font-medium text-sm">{item?.name}</h3>
                    <span className="font-medium text-sm">{item?.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default TestimonialSection