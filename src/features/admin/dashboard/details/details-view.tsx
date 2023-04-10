import { ChartLine } from "@common/components/charts/ChartLine";
import ChartSemiCircle from "@common/components/charts/ChartSemiCircle";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import MinimizeIcon from "@common/components/icons-new/MinimizeIcon";
import WarningIcon from "@common/components/icons-new/WarningIcon";

export default function DetailsView() {
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <div className="flex justify-between">
        <div>Menu / Dashboard / Details</div>
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
          <div className="flex flex-col gap-[30px]">
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] flex-1">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Current
              </span>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={75.86} color="#E8A045" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      75.86 A
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">Current R</span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={58.07} color="#E8A045" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      58.07 A
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">Current S</span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={44.21} color="#FF3030" />
                    <div className="absolute flex flex-col items-center">
                      <WarningIcon />
                      <span className="text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                        44.21 A
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">Current T</span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={58.07} color="#F6D523" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      58.07
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Current AVG
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] h-[156px]">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Current Unbalance
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  0.22 %
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Percentage
                </span>
              </div>
            </div>
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] h-[156px]">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Frequency
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  30.03 Hz
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Value
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] flex-1">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Current
              </span>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={75.86} color="#E8A045" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      75.86 A
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage R-S
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={58.07} color="#E8A045" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      58.07 A
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage S-T
                  </span>
                </div>

                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={44.21} color="#FF3030" />
                    <div className="absolute flex flex-col items-center">
                      <WarningIcon />
                      <span className="text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                        44.21 A
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage T-R
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={58.07} color="#F6D523" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      58.07
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage R-N
                  </span>
                </div>

                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={44.21} color="#FF3030" />
                    <div className="absolute flex flex-col items-center">
                      <WarningIcon />
                      <span className="text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                        44.21 A
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage S-N
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="relative flex items-end justify-center">
                    <ChartSemiCircle value={58.07} color="#F6D523" />
                    <span className="absolute text-[#5C5C5C] text-[20px] leading-[20px] font-medium flex">
                      58.07
                    </span>
                  </div>
                  <span className="text-[#8A8A8A] font-medium">
                    Voltage T-N
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] h-[156px]">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Voltage Unbalance
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  0.22 %
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Percentage
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] flex-1">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Power
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  113.15 kVA
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Apparent Power
                </span>
              </div>
            </div>
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] h-[156px]">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Power Factor
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  89%
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Percentage
                </span>
              </div>
            </div>
            <div className="border border-[#8A8A8A] rounded-md p-[6px] flex flex-col gap-1 min-w-[340px] h-[156px]">
              <span className="w-full border-b border-[#8A8A8A] text-center">
                Energy
              </span>
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="text-[#5C5C5C] text-[40px] font-extrabold">
                  113254 kWh
                </span>
                <span className="text-[#8A8A8A] text-[16px] font-medium">
                  Apparent Energy Del
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
