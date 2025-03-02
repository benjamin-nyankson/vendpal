import Button from "../Button";
import Pilltab from "../Pilltab";
import GreyBackground from "./GreyBackground";
import EditIcon from "../../assets/icons/EditIcon";
import { colors } from "../../constants/colors";
import { useStore } from "../../store/useStore";

export default function CurrencyCard() {
    const {setAlert}= useStore()
    const handleAlert = ()=>{
        setAlert(["Overview edited successfully","success"])
    }
  return (
    <div className=" border-full whitespace-nowrap rounded-3xl w-full sm:w-full md:w-[300px] lg:w-[498px]">
      <p className=" p-4 border-bottom font-medium">Currency</p>
      <div className="p-4 flex flex-col gap-5">
        <div className=" flex  items-center justify-between gap-5">
          <p>Principal Currency</p>
          <Pilltab text="Basic User" />
        </div>

        <GreyBackground>
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
            <p className="text-lg">Naira</p>
          </div>
        </GreyBackground>
        <GreyBackground label="Tax type">
          <p>Value Added Tax (VAT)</p>
        </GreyBackground>

        <div className="flex justify-between items-center gap-6">
          <GreyBackground label="Tax rate">
            <p>Fixed amount</p>
          </GreyBackground>
          <GreyBackground label="Tax type">
            <p>30.00</p>
          </GreyBackground>
        </div>
      </div>
      <div className="p-6 border-top">
        <Button
          className="bg-primary flex items-center justify-center text-primary-container"
          icon={<EditIcon color={colors.primaryContainer} />}
          label="Edit overview"
          onClick={handleAlert}
        />
      </div>
    </div>
  );
}
