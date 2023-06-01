import React from "react";
import { RiCloseFill } from "react-icons/ri";

function Nav({ itens }) {
  return (
    <aside
      id="navbar"
      className="fixed h-screen bg-gray-900 right-0 w-1/3 duration-500 z-10"
    >
      <div className="flex w-full justify-between items-center my-5 px-10 h-16">
        <h2 className="text-gray-100 text-xl font-bold">Categorias</h2>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            document
              .getElementById("navbar")
              .classList.toggle("translate-x-full");
          }}
        >
          <RiCloseFill className="text-gray-100 h-full" size={32} />
        </button>
      </div>
      <ul className="w-full flex flex-col justify-center items-start gap-5 px-16">
        {itens.map((item) => (
          <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full flex justify-start items-center">
            <button className="text-gray-100 flex justify-center items-center p-2">{item}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Nav;
