import { motion } from "framer-motion";

const Btn = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-blue-500 to-green-500 px-4 font-semibold py-2"
    >
      {text}
    </motion.button>
  );
};

export default Btn;
