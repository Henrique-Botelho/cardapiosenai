import React from "react";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import imagemFundo from "../../assets/fundo.png"

function Home() {

  const backgroundImageStyle = {
    backgroundImage: `url('${imagemFundo}')`,
    backgroundSize: "cover"
  }

  return(
    <div style={backgroundImageStyle} className="w-screen h-screen flex justify-center items-center ">
      <Header />
      <Nav itens={["Salgados", "Doces", "Bebidas"]} />
      <main className="container top-20 fixed h-full">
        <h1 className="text-gray-100">Olá mundo</h1>
      </main>
    </div>
  )
}

export default Home;