export default function BurgerIcon({ color = "white", ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="18" height="2" rx="1" fill={color} />
      <rect y="8" width="18" height="2" rx="1" fill={color} />
      <rect y="16" width="18" height="2" rx="1" fill={color} />
    </svg>
  );
}
