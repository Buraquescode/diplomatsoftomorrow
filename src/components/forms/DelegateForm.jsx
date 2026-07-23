import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import Button from "../ui/Button";
import { ExternalLink } from "lucide-react";

const EXPERIENCE_LEVELS = ["Beginner (0 conferences)", "Intermediate (1–3 conferences)", "Advanced (4+ conferences)"];
const COMMITTEES = ["UNSC", "UNHRC", "DISEC", "ECOSOC", "Crisis Committee", "Historical Committee", "No preference"];


const GOOGLE_FORM_URL =
  "https://forms.gle/B4AVDdhxU3bukGNv6";

export default function DelegateForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-gold-500/15 text-center"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
        Join as a Delegate in <span className="text-gold-400">DOT</span>?
      </h3>
      <p className="text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto">
        Fill out our official application form to tell us about yourself, your
        experience.
      </p>

      <motion.a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                   bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900
                   font-semibold text-lg shadow-lg shadow-gold-500/20
                   hover:shadow-xl hover:shadow-gold-500/30 transition-shadow"
      >
        Apply Now
        <ExternalLink size={20} />
      </motion.a>

      <p className="text-sm text-gray-400 mt-5">
        You'll be redirected to our official Google Form.
      </p>
    </motion.div>
  );
}