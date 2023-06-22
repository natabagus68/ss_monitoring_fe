import React from "react";

const RowPerPage = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="font-[14px] text-[#514E4E] font-bold">Rows per page</p>
      <select
        name=""
        id=""
        className="px-3 py-1 border border-gray-300 rounded-md bg-white outline-none"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
          return <option value="">{item}</option>;
        })}
      </select>
    </div>
  );
};

export default RowPerPage;
