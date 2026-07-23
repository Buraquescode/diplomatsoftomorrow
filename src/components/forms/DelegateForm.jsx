import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import Button from "../ui/Button";

const EXPERIENCE_LEVELS = ["Beginner (0 conferences)", "Intermediate (1–3 conferences)", "Advanced (4+ conferences)"];
const COMMITTEES = ["UNSC", "UNHRC", "DISEC", "ECOSOC", "Crisis Committee", "Historical Committee", "No preference"];

export default function DelegateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Delegate application:", data);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Application submitted — we'll be in touch soon!");
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-gold-500/15"
    >
      <div className="grid sm:grid-cols-2 gap-x-6">
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Jane Doe"
          register={register}
          validation={{ required: "Full name is required" }}
          error={errors.fullName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          register={register}
          validation={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          }}
          error={errors.email}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6">
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+92 3XX XXXXXXX"
          register={register}
          validation={{
            required: "Phone number is required",
            pattern: { value: /^[0-9+\-\s]{7,15}$/, message: "Enter a valid phone number" },
          }}
          error={errors.phone}
        />
        <FormInput
          label="Institution"
          name="institution"
          placeholder="Your school / university"
          register={register}
          validation={{ required: "Institution is required" }}
          error={errors.institution}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6">
        <FormSelect
          label="Experience Level"
          name="experienceLevel"
          options={EXPERIENCE_LEVELS}
          register={register}
          validation={{ required: "Please select your experience level" }}
          error={errors.experienceLevel}
        />
        <FormSelect
          label="Committee Preference"
          name="committeePreference"
          options={COMMITTEES}
          register={register}
          validation={{ required: "Please select a committee" }}
          error={errors.committeePreference}
        />
      </div>

      <FormTextarea
        label="Motivation"
        name="motivation"
        placeholder="Why do you want to join as a delegate?"
        rows={5}
        register={register}
        validation={{
          required: "Please tell us your motivation",
          minLength: { value: 30, message: "Please write at least 30 characters" },
        }}
        error={errors.motivation}
      />

      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full mt-2">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </motion.form>
  );
}