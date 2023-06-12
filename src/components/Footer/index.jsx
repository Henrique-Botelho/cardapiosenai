import React from "react";
import { BsShop } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";


function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex sm:flex-row flex-col bg-gray-800 p-2 gap-3 sm:gap-0 rounded-t">
        <div className="hidden w-60 md:flex flex-col justify-center items-center">
          <BsShop size={20} className="text-gray-100" />
          <h2 className="text-gray-100 text-sm">Cantina SENAI</h2>
        </div>
        <div className="w-full">
          <h3 className="w-full text-gray-300 text-lg pb-3">Desenvolvedores</h3>
          <ul className="grid grid-cols-2 grid-rows-5 md:grid-cols-3">
            <a href="https://github.com/ClaushSouza" target="_blank">
              <li className="text-gray-500">Abner Mendes</li>
            </a>
            <a href="https://github.com/alvarexx" target="_blank">
              <li className="text-gray-500">Álvaro Muniz</li>
            </a>
            <a href="https://github.com/BiancaMarcondes" target="_blank">
              <li className="text-gray-500">Bianca Marcondes</li>
            </a>
            <a href="https://github.com/dudaribas" target="_blank">
              <li className="text-gray-500">Eduarda Ribas</li>
            </a>
            <a href="https://github.com/fabiola-girotti" target="_blank">
              <li className="text-gray-500">Fabiola Girotti</li>
            </a>
            <a href="https://github.com/Gctyx" target="_blank">
              <li className="text-gray-500">Gabriel Cordeiro</li>
            </a>
            <a href="https://github.com/GiPaiva" target="_blank">
              <li className="text-gray-500">Giovanna Paiva</li>
            </a>
            <a href="https://github.com/Guigite" target="_blank">
              <li className="text-gray-500">Guilherme Cunha</li>
            </a>
            <a href="https://github.com/GuiLeoni" target="_blank">
              <li className="text-gray-500">Guilherme Leoni</li>
            </a>
            <a href="https://github.com/Decompilationist" target="_blank">
              <li className="text-gray-500">Gustavo Alves</li>
            </a>
            <a href="https://github.com/gustavol1" target="_blank">
              <li className="text-gray-500">Gustavo Lima</li>
            </a>
            <a href="https://github.com/heitorsclaudino" target="_blank">
              <li className="text-gray-500">Heitor Claudino</li>
            </a>
            <a href="https://github.com/Henrique-Botelho" target="_blank">
              <li className="text-gray-500">Henrique Botelho</li>
            </a>
            <a href="https://github.com/HLN-lobo" target="_blank">
              <li className="text-gray-500">Henrique Lobo</li>
            </a>
            <a href="https://github.com/LAugustoLeite" target="_blank">
              <li className="text-gray-500">Luiz Augusto</li>
            </a>
          </ul>
        </div>
        <div className="w-full sm:w-96 flex flex-col">
          <h3 className="w-full text-gray-300 text-lg pb-3">Redes Sociais</h3>
          <div className="h-full flex gap-1">
            <a href="https://www.instagram.com/senai.suico/" target="_blank">
              <AiOutlineInstagram size={20} className="text-gray-500" />
            </a>
            <a href="https://www.facebook.com/senai.suico/?locale=pt_BR" target="_blank">
              <AiOutlineFacebook size={20} className="text-gray-500" />
            </a>
            <a href="https://github.com/Senai-Suico-Turma-3dmA" target="_blank">
              <AiOutlineGithub size={20} className="text-gray-500" />
            </a>
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
