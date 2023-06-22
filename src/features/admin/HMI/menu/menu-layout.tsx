import my_logo from "../../../../assets/my-logo.svg";
import useAdmin from "./menu-layout-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import DateTime from "@common/components/DateTime";
import MachineIcon from "@common/components/icons-new/MachineIcon";
import ShiftIcon from "@common/components/icons-new/ShiftIcon";

export default function MenuLayout() {
  const admin = useAdmin();
  return admin.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
      <div className="grid grid-cols-6">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <img src={my_logo} alt="My Logo" className="h-[94px] w-fit scale-150" />
          </div>
          <div className="col-span-3 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
            <div className="w-10 h-10 border-4 border-white bg-green-500 rounded-full mr-2 "></div>
            <span className={`text-white font-[700] text-5xl `}>Assy Cabin 01</span>
          </div>
          <div className="col-span-2 flex flex-col bg-[#0D2243]">
              <DateTime />
          </div>

          {/* Colom 2 */}
          <div className="col-span-4 flex justify-center items-center py-4 border-2">
            <span className={`text-[#FECE00] font-[700] text-4xl `}>Option</span>
          </div>
          <div className="col-span-2 py-4 items-center flex gap-3 px-5 border-2">
            <MachineIcon className="scale-150" />
            <span  className={`text-white font-[700] text-3xl`}>{`Machine A`}</span>
          </div>
          
          {/* Colom 3 */}
          <div className="col-span-4 row-span-4 px-10 py-12 grid grid-cols-2 gap-3 border-2">
              <button onClick={()=> admin.setNavigate('today-task')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Production Plan</button>
              <button onClick={()=> admin.setNavigate('work-order-selection')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Preparation</button>
              <button onClick={()=> admin.setNavigate('production-problem')} className="bg-[#F79009] py-5 px-6 rounded-md font-bold text-2xl text-white">Production Problem</button>
              <button onClick={()=> admin.setNavigate('additional-material')} className="bg-[#F79009] py-5 px-6 rounded-md font-bold text-2xl text-white">Data Defect</button>
          </div>
          <div className="col-span-2 items-center flex gap-3 px-5 border-2">
            <ShiftIcon className="scale-150" />
            <span  className={`text-white font-[700] text-3xl`}>{`Shift 1`}</span>
          </div>
          <div className="col-span-2 row-span-3 flex justify-center items-center border-2" onClick={admin.onLogout}>
            <button className="py-5 px-16 border-4 border-red-500 text-red-500 text-4xl font-bold">Logout</button>
          </div>

          {/* Colom 4 */}
          <div className="col-span-6 flex justify-center items-center py-4 border-2">
            <span className={`text-[#FECE00] font-[700] text-4xl `}>List 4M+1E</span>
          </div>

          {/* Colom 5 */}
          <div className="col-span-6 grid grid-cols-5 gap-3 p-10">
          <button onClick={()=> admin.setNavigate('method')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Method</button>
          <button onClick={()=> admin.setNavigate('material')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Material</button>
          <button onClick={()=> admin.setNavigate('equipment')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Equipment</button>
          <button onClick={()=> admin.setNavigate('manpower')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Manpower</button>
          <button onClick={()=> admin.setNavigate('layout')} className="bg-[#19ACC1] py-5 px-6 rounded-md font-bold text-2xl text-white">Layout</button>
          </div> 

      </div>
      
    </main>
    
  );
}
