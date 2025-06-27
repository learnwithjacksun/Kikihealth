import { ChevronDown } from "lucide-react";

const SelectWithIcon = ({
  icon,
  label,
  error,
  options,
  defaultValue,
  ...props
}: SelectWithIconProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-xs text-muted font-medium">
        {label}
      </label>
      <div className="relative mt-1">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
          {icon}
        </div>
        <select
          {...props}
          className={`pl-12 h-11 w-full rounded-lg text-sm border border-line focus:border-primary focus:ring-[3px] appearance-none focus:ring-primary/20 dark:bg-secondary ${props.className}`}
        >
          <option value="" >{defaultValue || `Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="text-muted absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
      {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
    </div>
  );
};

export default SelectWithIcon;
