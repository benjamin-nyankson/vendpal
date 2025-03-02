import { useState } from "react";
import Datepicker from "../ui/Datepicker";
import CurrencyCard from "./CurrencyCard";
import ConversionRateCard from "./ConversionRateCard";
export default function CurrencyAndTaxes() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div>
      <div className="flex items-center gap-8 pt-4 pb-[18px] whitespace-nowrap border-b border-[#C0C8CD] overflow-x-auto">
        <p className="text-neutral15 font-medium text-lg">Financial year</p>
        <Datepicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          label="Start"
          labelPosition="left"
        />
        <Datepicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          label="End"
          labelPosition="left"
        />
      </div>
      <div className="p-6 flex gap-6 flex-col sm:flex-col md:flex-row lg:flex-row">
        <CurrencyCard />
        <div className="flex flex-col gap-6">
          <ConversionRateCard />
          <div className="p-6 bg-error90 rounded-3xl  w-fit sm:w-fit md:w-[300px] lg:w-[498px]">
            <p className="text-error">
              You cannot change the Principal Currency once the financial year
              has commenced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
