import { useToast } from "@/components/hooks/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children}) => {
    const { toast } = useToast();
    const navigate = useNavigate();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handelTokenCheking = async()=>{
        try {
            const res = await fetch("/api/protected",{
                method : "GET",
                credentials : "include",
                headers : {
                    Cookie : document.cookie
                }
            });

            if(!res.ok){
                const data = await res.json();
                console.log(data);
                if(data?.success === false || data?.message === "Token Expired"){
                    toast({
                        title : data?.message,
                        description : "Your Token is Expired Please Login to access resources",
                        variant : "destructive"
                    });
                    // setIsAuthenticated(false);
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
            // setIsAuthenticated(false);
        }
    }

    useEffect(()=>{
        handelTokenCheking();
    },[]);

  return children
}

export default Protected