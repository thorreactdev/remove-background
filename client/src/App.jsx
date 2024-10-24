// import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import Profile from "./pages/Profile";
import SingleImage from "./pages/SingleImage";
import Protected from "./secure/Protected";

const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path : "/result",
        element : 
        <Protected>
          <ResultPage/>
        </Protected>
      },
      {
        path : "/profile",
        element :
        <Protected>
          <Profile/>
        </Protected>
      },
      {
        path : "/singleImage/:id",
        element : 
        <Protected>
          <SingleImage/>
        </Protected>
      }
    ]
  }
])

function App() {
  
  return(
   <RouterProvider router={router}/>
  )
}

export default App
