import { Link } from "react-router-dom";
import OAuth from "./OAuth";
import { useSelector } from "react-redux";
import { useState } from "react";
import SignoutPopup from "@/model/SignoutPopup";
import { useToast } from "@/components/hooks/use-toast";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "@/app/slice/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showDropDown, setShowDropDown] = useState(false);
  const[showPopup , setShowPopup] = useState(false);
  const { toast } = useToast();
  const dispatch = useDispatch();

  console.log(currentUser);

  const handleSignOut = async() =>{
    try {
      const res = await fetch("/api/signout", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }
      });
      const data = await res.json();
      if(res.ok){
        dispatch(signoutSuccess());
        toast({
          title : data?.message
        })
      }else{
        toast({
          title : "Something Went Wrong",
          variant : "destructive"
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-3">
        <Link>
          <figure>
            <img
              src="/logo.svg"
              alt="Bg Removal Logo"
              title="Bg Removal Logo"
              className="w-32 md:w-full"
            />
          </figure>
        </Link>
        {currentUser && currentUser ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setShowDropDown(true)}
          >
            <img
              src={currentUser && currentUser?.avatar}
              alt="User Profile"
              className="w-5 h-5 md:w-8 md:h-8 rounded-full"
            />
            <span className="font-medium text-sm">@{currentUser?.name}</span>
            <div
               // Show dropdown when hovering over the icon
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {showDropDown && (
              <div
                className="w-[250px] h-28 bg-white border shadow-xl fixed right-4 2xl:right-auto top-14 p-4 flex flex-col gap-2 rounded-lg"
                onMouseEnter={() => setShowDropDown(true)} // Keep dropdown visible when hovered
                onMouseLeave={() => setShowDropDown(false)} // Hide dropdown when mouse leaves the dropdown
              >
                <p className="text-xs font-bold">@{currentUser?.email}</p>
                <div className="flex flex-col gap-3">
                <p onClick={()=>{
                  setShowDropDown(false);
                  setShowPopup(true);
                }} className="text-sm font-bold bg-gradient-to-t from-[#ff0885] to-[#f14814] bg-clip-text text-transparent cursor-pointer">
                  Sign Out
                </p>

                <Link to="/profile" onClick={()=> setShowDropDown(false)} className="text-sm font-bold bg-gradient-to-t from-[#ff0885] to-[#f14814] bg-clip-text text-transparent cursor-pointer">
                  Profile
                </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <OAuth />
        )}
      </nav>
      {showPopup && 
        <SignoutPopup onClose={()=> setShowPopup(false)} onConfirm={handleSignOut}/>
      }
    </>
  );
};

export default Header;
