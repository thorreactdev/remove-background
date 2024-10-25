import category from "@/utils/category.json";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-14 md:mt-32">
      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className="text-center text-xl text-regal_blue font-bold md:text-4xl ">
          Explore Our Features
        </h2>
        <span className="text-center text-sm text-regal_blue font-medium">
          Background Removal & Image Makeover and more to come
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {category?.categories?.map((item)=>(
            <Link key={item.id} to={`/category/${item?.id}`}>
            <div  className="flex flex-col gap-4 shadow-xl bg-white p-6 border rounded-md">
              <p className="font-bold text-regal_blue text-xl">{item.name}</p>
              <span className="text-xs md:text-sm font-medium text-regal_blue">
                {item?.description}
              </span>
            </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Category;
