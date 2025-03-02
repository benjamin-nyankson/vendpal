import { colors } from "../../constants/colors";

export default function DashboardIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 10.6667V0H11.1667V10.6667H0.5ZM0.5 24V13.3333H11.1667V24H0.5ZM13.8333 10.6667V0H24.5V10.6667H13.8333ZM13.8333 24V13.3333H24.5V24H13.8333ZM3.16667 8H8.5V2.66667H3.16667V8ZM16.5 8H21.8333V2.66667H16.5V8ZM16.5 21.3333H21.8333V16H16.5V21.3333ZM3.16667 21.3333H8.5V16H3.16667V21.3333Z"
          fill={colors.neutral15}
        />
      </svg>
    </div>
  );
}
