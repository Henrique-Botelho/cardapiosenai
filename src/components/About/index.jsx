import React from "react";

import imagemCantina from "../../assets/fundo.png"

function About() {
  return (
    <div className="w-full">
      <div className="bg-gray-800 p-5 gap-2 rounded w-full">
        <h2 className="text-yellow-500 tracking-wide font-cherrybomb text-3xl pb-4">Sobre</h2>
        <div className="flex flex-col sm:flex-row gap-5">
          <p className="w-full font-cherrybomb tracking-widest sm:w-1/2 text-justify text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            expedita dignissimos, vero sequi iure error saepe consectetur qui.
            Ducimus tenetur laboriosam pariatur debitis dolor? Eos expedita quasi
            provident ullam maiores.
          </p>
          <img className="h-full sm:w-1/2 rounded" src={imagemCantina} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
