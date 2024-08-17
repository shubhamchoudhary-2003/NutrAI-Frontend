// "use client";
// import React, { useState } from "react";
// import { FileUpload } from "@/ui/file-upload";
// import Image from "next/image";

// export function ImageInput({ onUploadComplete }: { onUploadComplete: (data: any) => void }) {
//   const [files, setFiles] = useState<File[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleFileUpload = async (newFiles: File[]) => {
//     if (newFiles.length > 0) {
//       setFiles([newFiles[0]]);
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("image", newFiles[0]);

//       try {
//         const response = await fetch("/api/upload", {
//           method: "POST",
//           body: formData,
//         });

//         if (!response.ok) {
//           console.error("Failed to get nutritional data");
//           setLoading(false);
//           return;
//         }

//         const data = await response.json();
//         onUploadComplete(data);
//       } catch (error) {
//         console.error("Error posting to external API:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
  
  

//   return (
//     <div className="w-full flex flex-col justify-center max-w-4xl mx-auto min-h-96 bg-white powr:bg-black border-neutral-200 powr:border-neutral-800 rounded-lg p-8">
//       <div className="flex flex-col items-center justify-center space-y-4">
//         {files.length > 0 ? (
//           <Image
//             src={URL.createObjectURL(files[0])}
//             alt="Uploaded image preview"
//             width={200}
//             height={200}
//             className="object-contain"
//           />
//         ) : (
//           <>
//             <p className="relative z-20 font-sans font-extrabold text-neutral-700 powr:text-neutral-300 text-xl">
//               Upload File
//             </p>
//             <p className="relative z-20 font-sans font-medium text-neutral-500 powr:text-neutral-400 text-lg">
//               Drag & drop your files here or click to upload
//             </p>
//             <div className="w-24 h-24 shadow-md flex items-center justify-center rounded">
//               <FileUpload onChange={handleFileUpload} />
//             </div>
//           </>
//         )}
//         {loading && <div className="loader">Loading...</div>}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { FileUpload } from "@/ui/file-upload";
import Image from "next/image";
import Loader from "@/app/loading"; // Import the loading component

export function ImageInput({ onUploadComplete }: { onUploadComplete: (data: any) => void }) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (newFiles: File[]) => {
    if (newFiles.length > 0) {
      setFiles([newFiles[0]]);
      setLoading(true);

      const formData = new FormData();
      formData.append("image", newFiles[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          console.error("Failed to get nutritional data");
          setLoading(false);
          return;
        }

        const data = await response.json();
        onUploadComplete(data);
      } catch (error) {
        console.error("Error posting to external API:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center max-w-4xl mx-auto min-h-96 bg-white powr:bg-black border-neutral-200 powr:border-neutral-800 rounded-lg p-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        {files.length > 0 ? (
          <Image
            src={URL.createObjectURL(files[0])}
            alt="Uploaded image preview"
            width={200}
            height={200}
            className="object-contain"
          />
        ) : (
          <>
            <p className="relative z-20 font-sans font-extrabold text-neutral-700 powr:text-neutral-300 text-xl">
              Upload File
            </p>
            <p className="relative z-20 font-sans font-medium text-neutral-500 powr:text-neutral-400 text-lg">
              Drag & drop your files here or click to upload
            </p>
            <div className="w-24 h-24 shadow-md flex items-center justify-center rounded">
              <FileUpload onChange={handleFileUpload} />
            </div>
          </>
        )}
        {loading && <Loader />} {/* Use the Loading component here */}
      </div>
    </div>
  );
}
