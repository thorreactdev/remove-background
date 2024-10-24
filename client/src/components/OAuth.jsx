import { Button } from "./ui/button";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from "@/config/firebaseConfig";
import { useDispatch , useSelector } from "react-redux";
import { signInStart , signInSuccess } from "@/app/slice/userSlice";
import { useToast } from "@/components/hooks/use-toast";


const OAuth = () => {
  const { toast } = useToast();
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state)=> state.user);
  console.log(currentUser);


  const handleGoogleClick = async()=>{
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt : "select_account"});
    try {
      const result = await signInWithPopup(auth,googleProvider);
      dispatch(signInStart());
      const res = await fetch("/api/google/login", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          name : result.user.displayName,
          email : result.user.email,
          avatar : result.user.photoURL
        })
      });

      const data = await res.json();
      if(res.ok){
        dispatch(signInSuccess(data?.userData));
        toast({
          title : data?.message
        })
      }else{
        toast({
          title : data?.message
        })
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="">
      <Button
      onClick={handleGoogleClick}
        size="lg"
        className="flex gap-2 items-center bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199] font-bold"
      >
        <img src="/google.webp" alt="google_logo" className="w-6 bg-white rounded-full p-1"/>
        Get Started
      </Button>
    </div>
  );
};

export default OAuth;
