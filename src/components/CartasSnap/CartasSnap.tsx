import "./cartas.css";
import React from "react";

interface Carta {
  variant_id: number;
  variant_key: string;
  variant_label: string;
  Image: string;
  card_series: string;
}

interface CardSnapProps {
  carta: Carta;
}

const corDaSerie = (serie: string): string => {
  switch (serie.toLowerCase()) {
    case "series1":
      return "bg-green-600";
    case "series2":
      return "bg-blue-600";
    case "series3":
      return "bg-purple-600";
    case "series4":
      return "bg-yellow-500 text-black";
    case "series5":
      return "bg-red-600";
    case "starter":
      return "bg-gray-500";
    case "promo":
      return "bg-pink-500";
    default:
      return "bg-slate-500";
  }
};

export const CartasSnap: React.FC<CardSnapProps> = ({ carta }) => {
  return (
    <>
      <li
        className="bg-gradient-to-b from-[#0c0f1a] to-[#1a1d2e] text-white rounded-lg shadow-xl w-full max-w-sm mx-auto font-sans relative overflow-hidden"
        key={carta.variant_id}
      >
        <div
          className={`absolute top-[25px] z-0 ml-[30px] left-1/2 transform -translate-x-1/2 text-white text-[11px] font-bold px-2 py-[2px] rounded ${corDaSerie(
            carta.card_series
          )}`}
        >
          {carta.card_series}
        </div>
        <div className="border-4 border-gray-700 rounded-md overflow-hidden mb-3 mt-6">
          <img
            srcSet={carta.Image}
            alt={carta.variant_label}
            className="w-full object-cover h-auto z-10 relative"
          />
        </div>
        <div className="text-xl font-bold text-center tracking-wide text-[#e2feff] drop-shadow-[2px_2px_0_#000] uppercase leading-tight border-indigo-400 border-x-2 rounded-md">
          {carta.variant_key.split("_")[0]}
          <h2 className="text-xl italic text-center tracking-wide border-t-2 border-t-gray-100/75">{carta.variant_label}</h2>
        </div>
      </li>
    </>
  );
};
