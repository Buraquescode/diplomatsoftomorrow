import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FormSelect({
  label,
  name,
  options = [],
  placeholder = "Select an option",
  register,
  validation = {},
  error,
}) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-champagne-200 tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          defaultValue=""
          className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/5 backdrop-blur-md border outline-none transition-colors duration-300 text-offwhite focus:bg-white/8 ${
            error ? "border-red-400/60 focus:border-red-400" : "border-gold-500/20 focus:border-gold-400"
          }`}
          {...register(name, validation)}
        >
          <option value="" disabled className="bg-forest-900 text-offwhite/40">
            {placeholder}
          </option>
          {options.map((opt) => {
            const value = typeof opt === "string" ? opt : opt.value;
            const optLabel = typeof opt === "string" ? opt : opt.label;
            return (
              <option key={value} value={value} className="bg-forest-900 text-offwhite">
                {optLabel}
              </option>
            );
          })}
        </select>
        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-400/70"
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-red-400"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
}