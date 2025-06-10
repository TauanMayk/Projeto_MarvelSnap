import "./cabecalhopagina.css";
import { motion } from "framer-motion";

export const CabecalhoPagina = () => {
  return (
    <>
      <motion.header
        className="flex items-center px-6 py-4 text-center w-full justify-center relative"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          srcSet="/images/mvlsnap_lob_log_div_01.png"
          alt="logo-magickai"
          title="logo-magickai"
          className="h-16 mx-auto"
        />
        <div className="Icones text-2xl transition-transform duration-700 ease-in-out hover:scale-125 opacity-[0.90]">
          <i
            className="bi bi-sun-fill cursor-pointer bg-[#76456456] p-2 rounded-md"
            onClick={() => document.body.classList.toggle("dark-mode")}
            style={{ fontSize: "2rem", color: "#FFF" }}
          ></i>
        </div>
      </motion.header>
    </>
  );
};
