import React from "react";
import { RiCloseFill } from "react-icons/ri";

function Nav({ itens, setCategoria, categorias }) {
  return (
    <aside
      id="navbar"
      className="fixed h-screen bg-gray-900 right-0 w-screen xl:w-1/3 md:w-1/2 translate-x-full duration-500 z-10 overflow-y-scroll"
    >
      <div className="w-full flex justify-between items-center p-10">
        <h2 className="text-gray-100 text-xl font-bold">Categorias</h2>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            document
              .getElementById("navbar")
              .classList.toggle("translate-x-full");
            setCategoria(categorias);
          }}
        >
          <RiCloseFill className="text-gray-100 h-full" size={32} />
        </button>
      </div>
      <ul className="w-full flex flex-col gap-5 px-16">
        {itens.map((item) => (
          <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
            <button
              onClick={() => {
                setCategoria([item]);
                document
                  .getElementById("navbar")
                  .classList.toggle("translate-x-full");
              }}
              className="text-gray-100 w-full h-full flex items-center justify-start p-2"
            >
              {item[0].toUpperCase() + item.substring(1)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Nav;
