import { ImageInput } from "@/components/imageinput";
import NeutriTable from "@/components/neutritable";
import SearchBar from "@/components/searchbar";


export default function Home() {
  return (
   <div className="bg-white text-black">
    <div className="flex flex-row">
      <div className="h-full w-1/2 flex flex-col justify-between">
           <div><ImageInput /></div>
           <h1 className="align-middle font-bold text-center flex justify-center ">Or</h1>
           <div className="pt-5"><SearchBar /></div>
      </div>
      <div className=" w-1/2 h-full ">
          <NeutriTable />
      </div>
    </div>
    
   </div>
  );
}
