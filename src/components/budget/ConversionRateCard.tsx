import USAFlag from "../../assets/USAFlag";
import GreyBackground from "./GreyBackground";

export default function ConversionRateCard() {
  return (
    <div className=" border-full whitespace-nowrap rounded-3xl w-full sm:w-full md:w-[300px] lg:w-[498px] h-fit">
      <p className=" p-4 border-bottom font-medium">Conversion rate</p>
      <div className="p-4 flex flex-col gap-5">
        <GreyBackground>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <svg
                width="45"
                height="30"
                viewBox="0 0 45 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="15" height="30" fill="#00361D" />
                <rect
                  width="15"
                  height="30"
                  transform="translate(15)"
                  fill="white"
                />
                <rect
                  width="15"
                  height="30"
                  transform="translate(30)"
                  fill="#00361D"
                />
              </svg>
              <p className="font-semibold text-lg">NGA</p>
              <p className="text-lg">100,000</p>
            </div>
            <p className="invisible">feeee</p>
          </div>
        </GreyBackground>
        <GreyBackground>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <USAFlag />

              <p className="font-semibold text-lg">USA</p>
              <p className="text-lg">60.8142</p>
            </div>
            <p className="invisible">feeee</p>
          </div>
        </GreyBackground>
      </div>
    </div>
  );
}
