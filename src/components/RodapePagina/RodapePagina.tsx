import "./rodapepagina.css";
import { motion } from "framer-motion";

export const RodapePagina = () => {
  return (
    <motion.footer
      className="h-auto bg-[#6c53f9] text-white flex items-end p-6 text-center border-t-indigo-500 mt-16 justify-center"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      @2025 MarvelSnap Todos os direitos reservados.
    </motion.footer>
  );
};
