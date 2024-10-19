// src/ImageUploader.js

import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setError("Please select an image to upload.");
      return;
    }

    setError(""); // Reset any previous errors

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("/api/remove-background", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error removing background");
      }

      const data = await response.json();
      setProcessedImage(data.imageBase64); // Set the processed image base64
    } catch (err) {
      console.error(err);
      setError("Error removing background. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Background Remover</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Remove Background
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {processedImage && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Processed Image:</h2>
          <img src={processedImage} alt="Processed" className="mt-2 border" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
