"use client";
import React, { useState } from "react";
import { FileUpload } from "@/ui/file-upload";

export function ImageInput() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full flex flex-col justify-center max-w-4xl mx-auto min-h-96 border border-dashed bg-white powr:bg-black border-neutral-200 powr:border-neutral-800 rounded-lg p-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="relative z-20 font-sans font-extrabold text-neutral-700 powr:text-neutral-300 text-xl">
          Upload File
        </p>
        <p className="relative z-20 font-sans font-medium text-neutral-500 powr:text-neutral-400 text-lg">
          Drag & drop your files here or click to upload
        </p>
        <div className="w-24 h-24 shadow-md flex items-center justify-center rounded">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}
