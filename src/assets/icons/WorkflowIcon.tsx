import { colors } from "../../constants/colors";

export default function WorkflowIcon() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9998 24V20H12.6665V6.66667H9.99984V10.6667H0.666504V0H9.99984V4H17.9998V0H27.3332V10.6667H17.9998V6.66667H15.3332V17.3333H17.9998V13.3333H27.3332V24H17.9998ZM20.6665 8H24.6665V2.66667H20.6665V8ZM20.6665 21.3333H24.6665V16H20.6665V21.3333ZM3.33317 8H7.33317V2.66667H3.33317V8Z"
          fill={colors.neutral15}
        />
      </svg>
    </div>
  );
}
