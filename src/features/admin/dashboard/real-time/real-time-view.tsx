import { ChartLine } from "@common/components/charts/ChartLine";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import MinimizeIcon from "@common/components/icons-new/MinimizeIcon";

export default function RealTimeView() {
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <div className="flex justify-between">
        <div>Menu / Dashboard / Real Time</div>
        <div>20 April 2022</div>
      </div>
      <div className="flex flex-col w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div className="w-full h-[64px] bg-[#2BBA23] px-6 flex items-center justify-between">
          <select className="w-[251px] h-[30px] bg-white rounded-sm px-2">
            <option>Panel 5</option>
          </select>
          <div className="flex gap-4 items-center">
            <MinimizeIcon className="cursor-pointer w-[30px] h-[30px]" />
            <FullscreenIcon className="cursor-pointer w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-[30px]">
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              Voltage : 398.54 v
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              Current : 200.54 A
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              kW : 118.88 kW
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              kVAr : 65.54 kVAr
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              kVA : 130.98 kVA
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              Power Factor : 0.86 %
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
          <div className="border border-[#8A8A8A] rounded-md p-[6px] h-[230px] flex flex-col gap-1 min-w-[340px]">
            <span className="w-full border-b border-[#8A8A8A] text-center">
              Frequency : 50.07 Hz
            </span>
            <div className="flex-1">
              <ChartLine
                datas={[
                  [0, 0, 0],
                  [1, 2, 3],
                ]}
                labels={[9, 8, 11]}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
