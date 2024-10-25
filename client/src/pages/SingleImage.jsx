import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const SingleImage = () => {
    const { id } = useParams();
    console.log(id);
    const[backData , setBackData] = useState({});
    const[loading , setLoading] = useState(false);

    useEffect(()=>{
        const getSingle = async()=>{
            try {
                setLoading(true);
                const res = await fetch(`/api/single/${id}`);
                if(res.ok){
                    const data = await res.json();
                    console.log(data);
                    setBackData(data?.getData);
                    setLoading(false);
                }else{
                    alert("Something Went Wrong");
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }

        getSingle();

    },[]);


  return (
    <>
    {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="flex flex-col items-center">
          {/* Loader */}
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-white mt-2 font-semibold">Wait Fetching Image...</p>
        </div>
      </div>
    ) :(
      <div className="mt-10">
    <div className="bg-[url('/bg_layer.png')] bg-cover bg-center flex items-center justify-center">
        <img src={backData?.processedImage} alt="" className="w-1/2 h-auto"/>
    </div>
    <div className="flex gap-6 items-center justify-end mt-10">
    <Link to="/">
      <Button variant="destructive" size="lg" className="font-semibold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]">
          Try Another Image
        </Button>
      </Link>
    <a href={backData?.processedImage} download>
        <Button variant="destructive" size="lg" className="font-semibold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]">
          Download
        </Button>
      </a>
    </div>
    </div>
    )
  }
    
    </>
  )
}

export default SingleImage