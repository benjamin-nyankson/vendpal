import icon from "../../assets/icon.png";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useStore } from "../../store/useStore";
import ActionButton from "../ActionButton";
import ToggleButtons from "./ToggleButtons";
export default function Navbar() {
  const { toggleSidebar } = useStore();
  return (
    <nav className="bg-white w-full p-4 flex items-center justify-between gap-5 border-b border-[#C0C9C0]">
      <MenuIcon
        className="block sm:block md:block lg:hidden cursor-pointer"
        onClick={toggleSidebar}
      />
      <img src={icon} alt="icon" className="w-10 sm:w-10 md:w-20 lg:w-32" />
      <ToggleButtons />

      <div className="flex items-center gap-4">
        {/* notification button */}
        <ActionButton>
          <svg
            width="20"
            height="20"
            viewBox="0 0 23 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833496 23.3333V20.6667H3.50016V11.3333C3.50016 9.48888 4.05572 7.84999 5.16683 6.41666C6.27794 4.98332 7.72238 4.04443 9.50016 3.59999V2.66666C9.50016 2.1111 9.69461 1.63888 10.0835 1.24999C10.4724 0.861101 10.9446 0.666656 11.5002 0.666656C12.0557 0.666656 12.5279 0.861101 12.9168 1.24999C13.3057 1.63888 13.5002 2.1111 13.5002 2.66666V3.59999C15.2779 4.04443 16.7224 4.98332 17.8335 6.41666C18.9446 7.84999 19.5002 9.48888 19.5002 11.3333V20.6667H22.1668V23.3333H0.833496ZM11.5002 27.3333C10.7668 27.3333 10.1391 27.0722 9.61683 26.55C9.09461 26.0278 8.8335 25.4 8.8335 24.6667H14.1668C14.1668 25.4 13.9057 26.0278 13.3835 26.55C12.8613 27.0722 12.2335 27.3333 11.5002 27.3333ZM6.16683 20.6667H16.8335V11.3333C16.8335 9.86666 16.3113 8.6111 15.2668 7.56666C14.2224 6.52221 12.9668 5.99999 11.5002 5.99999C10.0335 5.99999 8.77794 6.52221 7.7335 7.56666C6.68905 8.6111 6.16683 9.86666 6.16683 11.3333V20.6667Z"
              fill="#252624"
            />
          </svg>
        </ActionButton>

        {/* message button */}
        <ActionButton>
          <svg
            width="20"
            height="20"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49984 16.6667H16.1665V14H5.49984V16.6667ZM5.49984 12.6667H21.4998V9.99999H5.49984V12.6667ZM5.49984 8.66666H21.4998V5.99999H5.49984V8.66666ZM0.166504 27.3333V3.33332C0.166504 2.59999 0.427615 1.97221 0.949837 1.44999C1.47206 0.927768 2.09984 0.666656 2.83317 0.666656H24.1665C24.8998 0.666656 25.5276 0.927768 26.0498 1.44999C26.5721 1.97221 26.8332 2.59999 26.8332 3.33332V19.3333C26.8332 20.0667 26.5721 20.6944 26.0498 21.2167C25.5276 21.7389 24.8998 22 24.1665 22H5.49984L0.166504 27.3333ZM4.3665 19.3333H24.1665V3.33332H2.83317V20.8333L4.3665 19.3333Z"
              fill="#1C1B1F"
            />
          </svg>
        </ActionButton>
      </div>
    </nav>
  );
}
