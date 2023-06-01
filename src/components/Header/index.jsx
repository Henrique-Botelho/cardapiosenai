import React, { useState, useEffect } from "react";
import api from "../../api";

import { BsShop } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";

function Header() {
  const [categorias, setCategorias] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    api
      .get("/produtos/categorias")
      .then((categ) => setCategorias(categ.data))
      .finally(() => setLoad(true));
  }, []);

  console.log(categorias);

  if (load) {
    return (
      <header className="container flex bg-gray-800 h-20 fixed top-0 rounded items-center justify-between px-5">
        <div className="h-full flex flex-col justify-center items-center">
          <BsShop size={30} className="text-gray-100" />
          <h1 className="text-gray-100">Cantina SENAI</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          {categorias.map((item) => (
            <button className="text-gray-100 hover:scale-110 hover:bg-gray-500 duration-500 p-2 rounded">
              {item.categoria[0].toUpperCase() + item.categoria.substring(1)}
            </button>
          ))}
        </div>
      </header>
    );
  } else {
    return (
      <header className="container flex bg-gray-800 h-20 fixed top-0 rounded items-center justify-between px-5">
        <div className="h-full flex flex-col justify-center items-center">
          <BsShop size={30} className="text-gray-100" />
          <h1 className="text-gray-100">Cantina SENAI</h1>
        </div>
        <div>
          <VscLoading className="text-gray-100 animate-spin" size={30} />
        </div>
      </header>
    );
  }
}

export default Header;
