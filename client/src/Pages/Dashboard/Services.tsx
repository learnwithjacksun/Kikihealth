import { services } from "@/Constants/dummy";
import { DashboardLayout } from "@/Layouts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const options = [
  { label: "Select Currency", value: "" },
  { label: "Canadian Dollars", value: "CAD" },
  { label: "Nigerian Naira", value: "NGN" },
];

const Services = () => {
  const [currency, setCurrency] = useState<string>("");
  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <DashboardLayout title="KIKI Services">
        <div>
          <div className="relative w-[200px]">
            <select
              name="currency"
              id="currency"
              value={currency}
              onChange={handleCurrencyChange}
              className="input appearance-none w-full"
            >
              {options.map((x, y) => (
                <option key={y} value={x.value}>
                  {x.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {services.map((x, y) => (
            <div
              key={y}
              className="relative border border-line p-4 rounded-lg space-y-2 flex flex-col"
            >
              <p className="text-lg font-semibold w-[100px] "> {x.title} </p>
              <p className="text-muted"> {x.duration} </p>
              <p className=" font-semibold">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency === "NGN" ? "NGN" : "CAD",
                }).format(currency === "NGN" ? x.priceInNGN : x.priceInCAD)}
              </p>
              <p
                className={`text-xs capitalize absolute top-2 right-2 py-1 px-3 font-semibold rounded-full ${
                  x.status === "available"
                    ? "text-green-500 bg-green-500/10"
                    : "text-red-500 bg-red-500/10"
                }`}
              >
                {x.status}
              </p>
              <button onClick={()=>{
                toast.warning("This feature is not available yet. Please check back later.");
              }} className="btn-primary text-sm h-10 w-[150px] rounded-md ms-0 mt-auto">
                {x.buttonText}
              </button>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Services;
