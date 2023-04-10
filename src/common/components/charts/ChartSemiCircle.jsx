export default function ChartSemiCircle({ value = 0, color = "#E8A045", ...props }) {
  return (
    <div className="w-[157.5px] h-[80px] relative">
      <svg className=" flex absolute left-[0px] w-[157.5px] h-[77.8px]">
        <g fill="none" stroke="#ddd" className="absolute top-[-20]">
          <circle cx="78" cy="78" r="65" strokeWidth="25" />
          <circle
            cx="78"
            cy="78"
            r="65"
            strokeWidth="25"
            style={{
              stroke: color,
              strokeDasharray: 203.9 + value * 2.031,
              transition: "0.5s",
            }}
            />
        </g>
      </svg>
    </div>
  );
}
