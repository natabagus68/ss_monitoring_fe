import my_logo from "../../../assets/my-logo.svg";

import React from "react";
import useAndonLayoutModel from "./AndonLayoutModel";
import ChartsDonut from "@common/components/charts/ChartsDonut";
import { Outlet } from "react-router-dom";

export default function AndonLayout() {
  const layout = useAndonLayoutModel();
  return (
    <main className="w-screen h-screen bg-[#212121] border-4 border-white flex flex-col overflow-y-hidden">
      <div className="grid grid-cols-5">
        {/* Colom 1 */}
        <div className="flex justify-center items-center border-2 overflow-hidden bg-white">
          <img
            src={my_logo}
            alt="My Logo"
            className="h-[94px] w-fit scale-150"
          />
        </div>
        <div className="col-span-3 flex justify-center items-center border-2 py-4 ">
          <span className={`text-white font-[700] text-7xl py-9 `}>
            Assy Cabin 01
          </span>
        </div>
        <div className="col-span-1 flex justify-center items-center border-2 py-4">
          <span className="text-white font-[700] text-7xl py-6 ">
            {layout.getDateTime()}
          </span>
        </div>

        {/* Colom 2 */}
        <div className="col-span-1 row-span-[7] ">
          <div className="flex flex-col py-5 gap-7 items-center border-2">
            <ChartsDonut value={90} color={"#F59F00"} title={"Utilization"} />
            <ChartsDonut
              value={90}
              color={"#229BD8"}
              title={"Efficiency Manpower"}
            />
            <ChartsDonut
              value={90}
              color={"#1BBDD4"}
              title={"Efficiency Total"}
            />
            <ChartsDonut value={90} color={"#74B816"} title={"NG Rate"} />
          </div>
          <div className="border-2 flex justify-center items-center py-[17px]">
            <button className="bg-[#F79009] py-6 px-10 rounded-md font-bold text-5xl text-white">
              Menu
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
