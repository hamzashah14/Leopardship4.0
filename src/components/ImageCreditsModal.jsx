import React from "react";
import ImageCredits from "./ui/credits";


const ImageCreditsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Image Credits</h2>
        <ImageCredits />
      </div>
    </div>
  );
};

export default ImageCreditsModal;
