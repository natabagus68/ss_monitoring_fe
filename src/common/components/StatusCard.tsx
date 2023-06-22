import React from "react";

const StatusCard = ({ input }: { input: string }) => {
  if (input.toLocaleLowerCase() === "active") {
    return (
      <div className="px-5 py-2 rounded-3xl text-center bg-[#12B569] text-white">
        Active
      </div>
    );
  } else {
    return (
      <div className="px-5 py-2 rounded-3xl text-center bg-[#F04438] text-white">
        Inactive
      </div>
    );
  }
};

export default StatusCard;
