import { Breadcrumbs } from "@common/components";
import PaginationNew from "@common/components/PaginationNew";
import RowPerPage from "@common/components/RowPerPage";
import StatusCard from "@common/components/StatusCard";
import UpDownIcon from "@common/components/icons-new/UpDownIcon";
import Pagination from "@common/components/pagination/Pagination";

export const Monitoring = () => {
  return (
    <>
      <Breadcrumbs items={["Monitoring"]} />
      <main className="mt-8 border border-gray-300 rounded-md p-8 w-full overflow-x-scroll md:overflow-">
        <div>
          <h1 className="text-[#313030] text-2xl font-bold">Monitoring</h1>
          <p className="text-[#667085] text-md">Monitoring Transaction Data</p>
        </div>
        <div className="my-4 rounded-md py-2 px-3 bg-[#F0F1F3] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="w-72 outline-none border border-gray-300 rounded-md px-3 py-2"
            />
            <button className="py-2 px-3 outline-dotted outline-gray-400 bg-white border-gray-500 rounded-md flex gap-2 items-center hover:scale-95 duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Status
            </button>
            <button className="py-2 px-4 outline-dotted outline-gray-400 bg-white border-gray-500 rounded-md flex gap-2 items-center hover:scale-95 duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Line
            </button>
          </div>
          <div>
            <button className="py-2 px-3 border border-gray-400 flex items-center gap-2 bg-white rounded-md hover:scale-95 duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              Filter
            </button>
          </div>
        </div>

        <div className="border border-gray-300 w-full rounded-md py-2 ">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 ">
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Status
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Part No
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Line No
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Target Daily
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Target hourly
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Status
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    Actual
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB] text-[#667085]">
                    NG part
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 ">
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    <StatusCard input="active" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Part No
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Line No
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Target Daily
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Target hourly
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Status
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    Actual
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
                <td>
                  <div className="py-2 text-center flex gap-2 px-5 items-center bg-[#FAFAFB]">
                    NG part
                    <UpDownIcon className="w-5 h-5" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full mt-6 flex justify-between">
          <RowPerPage />
          <PaginationNew />
        </div>
      </main>
    </>
  );
};
