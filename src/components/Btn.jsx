import { motion } from "framer-motion";

const Btn = ({ text }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-purple-500 to-cyan-600 cursor-pointer px-2 md:px-4 font-semibold py-1 md:py-2"
    >
      {text}
    </motion.span>
  );
};

export default Btn;
