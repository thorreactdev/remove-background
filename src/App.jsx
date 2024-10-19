import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
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
