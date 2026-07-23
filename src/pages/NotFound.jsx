import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-forest-950">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <p className="font-serif text-7xl md:text-8xl text-gold-400 mb-4">404</p>
        <h1 className="font-serif text-2xl md:text-3xl text-offwhite mb-3">
          This page left the negotiating table.
        </h1>
        <p className="text-offwhite/60 mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </motion.div>
    </main>
  );
}