export default function EyeShowIcon({ color = "black", ...props }) {
  return (
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="13"
        fill="none"
        viewBox="0 0 20 13"
        {...props}
      >
        <path
          fill="#fff"
          d="M10 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 6.667a4.167 4.167 0 110-8.334 4.167 4.167 0 010 8.334zM10 .25C5.833.25 2.275 2.842.833 6.5c1.442 3.658 5 6.25 9.167 6.25s7.725-2.592 9.167-6.25C17.725 2.842 14.167.25 10 .25z"
        ></path>
      </svg>
    );
}
