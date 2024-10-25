import HomePage from "@/pages/HomePage.jsx";
// import ImageUploder from "@/components/ImageUploder";
import { useParams } from "react-router-dom"
import ReImagine from "@/components/ReImagine";
import ProductPhotography from "@/components/ProductPhotography";

const CategoryBasedFrontend = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
        {parseInt(id) === 1 && <HomePage/>}
        {parseInt(id) === 2 && <ReImagine/>}
        {parseInt(id) === 3 && <ProductPhotography/>}
    </div>
  )
}

export default CategoryBasedFrontend