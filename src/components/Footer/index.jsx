import React from "react";
import { BsShop } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";


function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex sm:flex-row flex-col bg-gray-800 p-2 rounded-t">
        <div className="hidden w-60 md:flex flex-col justify-center items-center">
          <BsShop size={20} className="text-gray-100" />
          <h2 className="text-gray-100 text-sm">Cantina SENAI</h2>
        </div>
        <div className="w-full">
          <h3 className="w-full text-gray-300 text-lg pb-3">Equipe</h3>
          <ul className="grid grid-cols-2 grid-rows-5 md:grid-cols-3">
            <li className="text-gray-500">Abner</li>
            <li className="text-gray-500">Álvaro</li>
            <li className="text-gray-500">Bianca</li>
            <li className="text-gray-500">Eduarda</li>
            <li className="text-gray-500">Fabiola</li>
            <li className="text-gray-500">Gabriel</li>
            <li className="text-gray-500">Giovanna</li>
            <li className="text-gray-500">Guilherme Cunha</li>
            <li className="text-gray-500">Guilherme Leoni</li>
            <li className="text-gray-500">Gustavo Alves</li>
            <li className="text-gray-500">Gustavo Lima</li>
            <li className="text-gray-500">Heitor</li>
            <li className="text-gray-500">Henrique Botelho</li>
            <li className="text-gray-500">Henrique Lobo</li>
            <li className="text-gray-500">Luiz</li>
          </ul>
        </div>
        <div className="w-full sm:w-96 flex flex-col">
          <h3 className="w-full text-gray-300 text-lg pb-3">Redes Sociais</h3>
          <div className="h-full flex gap-1">
            <AiOutlineInstagram size={20} className="text-gray-500" />
            <AiOutlineFacebook size={20} className="text-gray-500" />
            <AiOutlineGithub size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
      <span className="w-full bg-gray-900 text-gray-300 text-center flex justify-center items-center p-2 text-sm">
        &copy; 2023 Copyright | Turma 3DM-A - Escola SENAI Suiço-Brasileira
      </span>
    </footer>
  );
}

export default Footer;
