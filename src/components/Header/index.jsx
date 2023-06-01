import React from "react";
import { BsShop } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

function Header() {
  return (
    <header className="container flex bg-gray-800 h-20 fixed top-0 rounded items-center justify-center px-5">
      <div className="h-full flex flex-col justify-center items-center">
        <BsShop size={30} className="text-gray-100" />
        <h1 className="text-gray-100">Cantina SENAI</h1>
      </div>
      <button
        onClick={() => {
          document
            .getElementById("navbar")
            .classList.toggle("translate-x-full");
        }}
        className="absolute right-3 h-full"
      >
        <ImMenu className="text-gray-100" size={30} />
      </button>
    </header>
  );
}

export default Header;
