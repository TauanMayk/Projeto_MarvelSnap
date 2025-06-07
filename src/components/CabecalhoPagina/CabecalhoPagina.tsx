import "./cabecalhopagina.css";
import { motion } from "framer-motion";

export const CabecalhoPagina = () => {
  return (
    <>
      <motion.header className="flex items-center px-6 py-4 text-center w-full justify-center relative">
        <img
          srcSet="./src/images/mvlsnap_lob_log_div_01.png"
          alt="logo-magickai"
          title="logo-magickai"
          className="h-16 mx-auto"
        />
        <div className="Icones text-2xl transition-transform">
        <i
          className="bi bi-sun-fill cursor-pointer hover:scale-110 transition"
          onClick={() => document.body.classList.toggle("dark-mode")}
          style={{ fontSize: "2rem", color: "#FFF" }}
        ></i>
        </div>
      </motion.header>
    </>
  );
};
