import React from "react";

import { BsWhatsapp } from "react-icons/bs";

function Zap() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone5511997021651&text=Quero%20reservar%20o%20meu%20pedido!"
      className="fixed bottom-2 right-2 z-10 flex bg-green-500 justify-center items-center rounded-2xl p-2"
    >
      <BsWhatsapp className="text-gray-100 text-3xl" />
    </a>
  );
}

export default Zap;
