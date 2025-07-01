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
              className="relative border border-line p-5 rounded-2xl bg-secondary hover:border-green-800 transition-shadow flex flex-col gap-4"
            >
              <span
                className={`text-xs capitalize absolute top-4 right-4 px-3 py-1 rounded-full font-semibold ${
                  x.status === "available"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-red-500/10 text-red-600"
                }`}
              >
                {x.status}
              </span>

              <h3 className="text-lg font-semibold text-primary w-[130px] md:w-[170px]">{x.title}</h3>

              <p className="text-sm text-muted">Duration: {x.duration}</p>

              <p className="text-base font-bold text-primary">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency === "NGN" ? "NGN" : "CAD",
                }).format(currency === "NGN" ? x.priceInNGN : x.priceInCAD)}
              </p>

              <button
                onClick={() =>
                  toast.warning(
                    "This feature is not available yet. Please check back later."
                  )
                }
                className="btn-primary text-sm h-9 w-full rounded-md mt-auto"
              >
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
