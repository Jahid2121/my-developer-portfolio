import { motion } from "framer-motion";

const Btn = ({icon, text }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{duration: 0.3}}
      className="flex items-center gap-2 hover:bg-slate-900 border rounded-full cursor-pointer px-2 md:px-4 font-semibold py-1 md:py-3"
      
    >
     {icon} {text}
    </motion.span>
  );
};

export default Btn;
