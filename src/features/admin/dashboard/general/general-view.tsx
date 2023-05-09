import { ChartLine } from "@common/components/charts/ChartLine";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import MinimizeIcon from "@common/components/icons-new/MinimizeIcon";
import speedo from "../../../../assets/speedo.png";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import { Breadcrumbs, Toggle } from "@common/components";
import ChartSemiCircle from "@common/components/charts/ChartSemiCircle";

export default function GeneralView() {
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["General"]} />
      <div className="w-full h-[266px] flex gap-[28px]">
        <div className="flex flex-col w-full flex-1 p-6 bg-white shadow-md rounded-xl overflow-hidden gap-4">
          <div className="flex flex-col">
            <span className="text-[#5C5C5C] text-[24px] font-semibold">
              Overall Statistic
            </span>
            <span className="text-[#5C5C5C] font-medium">
              Real Time Current Condition
            </span>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={60} color="#E8A045" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">60</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kWh</span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={38} color="#32AF3A" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">38</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kVA</span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={12} color="#FF5A62" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">12</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kVAr</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full flex-1 bg-white shadow-md rounded-xl overflow-hidden p-6">
          <div className="flex justify-between items-center">
            <span className="text-[#5C5C5C] text-base font-semibold">
              Power Consumption (kWh)
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[#5C5C5C] text-base font-medium">
                Monthly Cost
              </span>
              <select className="h-[30px] bg-white rounded-md px-2 border border-[#8A8A8A]">
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#5C5C5C] text-base font-medium">
              Rp. 30.000.000
            </span>
            <div className="flex items-center">
              <span className="text-[#FF3030] text-base font-medium">32%</span>
              <ArrowUpIcon color="#FF3030" className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="flex-1 pt-1">
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
      <div className="flex flex-col w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div className="w-full h-[64px] bg-[#2BBA23] px-6 flex items-center justify-between">
          <div className="flex gap-4">
            <select className="w-[251px] h-[36px] bg-white rounded-sm px-2">
              <option>LV-MDB 6</option>
            </select>
            {/* <button className="px-6 py-1 text-white border-2 border-white rounded-md">
              Reset
            </button>
            <button className="px-6 py-1 text-white border-2 border-white rounded-md">
              Location View
            </button> */}
          </div>
          {/* <Toggle /> */}
        </div>
        <div className="p-6 grid grid-cols-4 gap-[30px]">
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">Voltage [v]</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              391.54
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  350
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  399.2
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  412
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">Current [A]</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              1,942.95
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  1,056
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  1,942.95
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  2,562
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">kW</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#ED2121] font-extrabold">
              922.42
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  465
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  841.42
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  920
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">kVAr</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              423.45
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  400
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  405.45
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  722
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">kVA</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              984.33
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  566
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  994.33
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  1.072
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">Power Factor</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              0.9
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  0.7
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  0.9
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  1.6
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#8A8A8A] justify-between rounded-md flex flex-col gap-1 min-w-[251px]">
            <div className="border-b border-[#8A8A8A] flex items-center justify-between px-[15px] py-[9px]">
              <span className="">Frequency [Hz]</span>
              <button className="w-[48px] h-[24px] rounded text-white bg-[#28B411]">
                OK
              </button>
            </div>
            <span className="text-[40px] w-full text-center text-[#6B6F82] font-extrabold">
              50.01
            </span>
            <div className="w-full flex h-[62px] border-t border-[#8A8A8A] p-2">
              <div className="px-4 border-r border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Min</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  50.00
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Avg last 10 days</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  50.05
                </span>
              </div>
              <div className="px-4 border-l border-[#8A8A8A] flex flex-col items-center justify-center">
                <span className="text-[#54617A] text-xs">Max</span>
                <span className="text-[#5C5C5C] text-base font-medium">
                  50.18
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
