import { colors } from "../../constants/colors";

export default function BudgetIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.6665 21.6667V12.3333H7.33317V21.6667H4.6665ZM12.6665 21.6667V12.3333H15.3332V21.6667H12.6665ZM0.666504 27V24.3333H27.3332V27H0.666504ZM20.6665 21.6667V12.3333H23.3332V21.6667H20.6665ZM0.666504 9.66668V7.00001L13.9998 0.333344L27.3332 7.00001V9.66668H0.666504ZM6.59984 7.00001H21.3998L13.9998 3.33334L6.59984 7.00001Z"
          fill={colors.neutral15}
        />
      </svg>
    </div>
  );
}
