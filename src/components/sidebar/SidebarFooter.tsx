import { colors } from "../../constants/colors";

export default function SidebarFooter() {
  return (
    <footer className="border-top flex items-center justify-center pt-8 gap-4 text text-neutral15">
      <p>Terms of Service</p>
      <div>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill={colors.neutral15} />
        </svg>
      </div>
      <p>Privacy policy</p>
    </footer>
  );
}
