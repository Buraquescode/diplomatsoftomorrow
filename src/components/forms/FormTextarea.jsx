import { motion } from "framer-motion";

export default function FormTextarea({
  label,
  name,
  placeholder,
  rows = 5,
  register,
  validation = {},
  error,
}) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-champagne-200 tracking-wide">
        {label}
      </label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border outline-none transition-colors duration-300 text-offwhite placeholder:text-offwhite/30 focus:bg-white/8 resize-none ${
          error ? "border-red-400/60 focus:border-red-400" : "border-gold-500/20 focus:border-gold-400"
        }`}
        {...register(name, validation)}
      />
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