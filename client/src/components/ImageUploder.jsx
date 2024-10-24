// import { useState } from "react";
import Upload from "./Upload";


const ImageUploder = () => {
    // const [file, setFile] = useState(null);
    // const [preview, setPreview] = useState(null);
    // const [message, setMessage] = useState("");
  return (
    <div className="upload-container">
    <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-regal_blue">Upload Image and See the Magic . <br/> Try Now</h2>
    <div
      className="drop-zone shadow-xl border flex items-center justify-center"
    >
      <Upload/>
    </div>
  </div>
  )
}

export default ImageUploder