"use client"

import { useState } from "react";
import { ImageInput } from "@/components/imageinput";
import NeutriTable from "@/components/neutritable";
import SearchBar from "@/components/searchbar";

export default function Home() {
  const [nutritionalData, setNutritionalData] = useState(null);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-white text-black">
      <div className="flex flex-row">
        <div className="h-full w-1/2 flex flex-col justify-between">
          <div>
            <ImageInput onUploadComplete={setNutritionalData} />
          </div>
          <h1 className="align-middle font-bold text-center flex justify-center">Or</h1>
          <div className="pt-5">
            <SearchBar />
          </div>
          <div className="pt-5 flex justify-center">
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
            >
              Try Again
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <NeutriTable nutritionalData={nutritionalData} />
        </div>
      </div>
    </div>
  );
}
