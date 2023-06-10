import React from "react";
import { BsShop } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-gray-600 flex p-2">
        <div className="h-full flex flex-col justify-center items-center">
          <BsShop size={30} className="text-gray-100" />
          <h1 className="text-gray-100">Cantina SENAI</h1>
        </div>
      </div>
      <span className="w-full bg-gray-800 flex justify-center items-center p-2 text-sm">
        &copy; 2023 Copyright | Turma 3DM-A - Escola SENAI Suiço-Brasileira
      </span>
    </footer>
  );
}

export default Footer;
