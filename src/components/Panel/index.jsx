import React from "react";

function Panel() {
  return (
    <div className="w-full">
      <div className="h-[75vh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-yellow-500 text-center font-cherrybomb tracking-wider text-4xl">
        Cantina SENAI
        </h1>
        <span className="text-gray-100 text-center font-cherrybomb tracking-wider text-2xl">
        Acompanhe os preços dos seus itens favoritos aqui!
        </span>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
