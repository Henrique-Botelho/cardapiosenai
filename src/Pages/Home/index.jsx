import React from "react";

import Header from "../../components/Header";
import imagemFundo from "../../assets/fundo.png"

function Home() {

  const backgroundImageStyle = {
    backgroundImage: `url('${imagemFundo}')`,
    backgroundSize: "cover"
  }

  return(
    <div style={backgroundImageStyle} className="w-screen h-screen flex justify-center items-center">
      <Header />
    </div>
  )
}

export default Home;