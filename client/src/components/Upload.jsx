import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/hooks/use-toast";
import { useSelector } from "react-redux";

const Upload = ({apiLink}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileref = useRef();
  const { toast } = useToast();
  const { currentUser } = useSelector((state)=> state.user);
  console.log(apiLink);

 

  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];

  const handleChange = async (e) => {
    if (!currentUser) {
      return toast({
        title: "You need to login to upload images",
        variant: "destructive",
      });
    }
    const file = e.target.files[0];
    console.log(file);
    if (!file) {
      setLoading(false);
      return toast({
        title: "Please Upload Your File",
        variant: "destructive",
      });
    }

    if(!allowedTypes.includes(file.type)){
      return toast({
        title : "Invalid File Type",
        variant : "destructive"
      })
    }

    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("userId" ,currentUser?._id);
    for(let [key, value] of formData){
      console.log(`${key} : ${value}`)
    }

    try {
      setLoading(true);
      const res = await fetch(apiLink, {
        method: "POST",
        body: formData,
      });

      console.log("res" , res);

      if (!res.ok) {
        const errorData = await res.json();
        toast({
            title: errorData?.message || "Failed to upload or remove the background",
            variant: "destructive",
        });
        setLoading(false);
    } else {
        const data = await res.json();
        console.log(data);
        const processedImageURL = data?.resultImage;
        console.log(processedImageURL);
        setLoading(false);

        navigate("/result", {
          state: {
            originalImage : URL.createObjectURL(file) , processedImage : processedImageURL
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        hidden
        ref={fileref}
        accept="image/*"
        onChange={handleChange}
      />
       <Button
            size="lg"
            onClick={()=>fileref.current.click()}
            className="flex gap-2 items-center font-bold bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload Image
          </Button>
      {loading && (
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
            <p className="text-white mt-2">Processing image...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
