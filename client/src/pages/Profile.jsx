import { useToast } from "@/components/hooks/use-toast";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { toast } = useToast();

    const[backendData , setBackendData] = useState([]);
    const[loading , setLoading] = useState(false);
    console.log(backendData);

    const handleProfileData = async()=>{
        try {
            setLoading(true);
            const res = await fetch(`/api/get/uploads/${currentUser?._id}`);
            if(res.ok){
                const data = await res.json();
                console.log(data);
                setBackendData(data?.getData);
                setLoading(false);
            }else{
                toast({
                    title : "Something Went Wrong",
                    variant : "destructive"
                });
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleProfileData();
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
          <p className="text-white mt-2 font-semibold">Wait Fetching image...</p>
        </div>
      </div>
    ):(
        <div className="mt-10 flex flex-col gap-6 items-center justify-center px-3 md:px-0">
        <h1 className="text-regal_blue text-base md:text-2xl font-semibold">Your Removed Background Images</h1>
        <div className="flex gap-10 flex-wrap items-center justify-center">
        {backendData && backendData?.map((item)=>(
            <Link key={item._id} to={`/singleImage/${item?._id}`}>
            <div  className="flex items-center gap-10 bg-[url('/bg_layer.png')] bg-cover bg-center bg-no-repeat w-full md:w-[300px]">
                <img src={item?.processedImage} alt="" className="w-full h-auto md:w-[300px]"/>
            </div>
            </Link>
        ))}
        </div>
    </div>
    )
}
    
    </>
  )
}

export default Profile