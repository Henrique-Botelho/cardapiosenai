import React, { useState, useEffect } from "react";
import api from "../../api";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import imagemFundo from "../../assets/fundo.png";

import { VscLoading } from "react-icons/vsc";

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemFundo}')`,
    backgroundSize: "cover",
  };
  const [categoria, setCategoria] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    api
      .get("/produtos/categorias")
      .then((resp) => {
        let { data } = resp;
        const vetor = data.map((item) => item.categoria);
        setCategorias(vetor); // Dados estáticos
        setCategoria(vetor); // Dados dinâmicos
        return api.get("/produtos");
      })
      .then((resp) => {
        let { data } = resp;
        setProdutos(data);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data.message);
          setStatus('Ocorreu um erro inesperado.');
        } else if (error.request) {
          console.log(error.request);
          setStatus('Servidor fora do ar.');
        } else {
          console.log(error);
          setStatus('Ocorreu um erro inesperado.');
        }
      })
      .finally(() => setLoad(true));
  }, []);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="w-screen h-screen flex justify-center items-center"
      >
        <Header />
        <Nav
          categorias={categorias}
          setCategoria={setCategoria}
          itens={categorias}
        />
        <main className="container top-20 fixed bottom-0 overflow-y-scroll flex flex-col gap-3 p-3">
          {status === true ? categoria.map((categoria, index) => {
            return (
              <div
                className="w-full flex flex-col justify-center items-center lg:items-start"
                key={index}
              >
                <h3 className="text-gray-800 w-full my-3 text-2xl bg-yellow-500 p-2 sm:w-96 sm:text-center lg:text-left lg:w-72  rounded">
                  {categoria[0].toUpperCase() + categoria.substring(1)}
                </h3>
                <div className="w-full flex justify-center lg:justify-start items-center gap-3 flex-wrap">
                  {produtos.map((item) => {
                    if (item.categoria == categoria) {
                      return (
                        <div
                          key={item.id}
                          className="bg-white border w-full sm:w-96 flex justify-center items-center rounded p-2 h-32"
                        >
                          <div className="flex flex-col justify-center items-start w-1/2 gap-3">
                            <span className="text-xl font-bold text-gray-800 opacity-80">
                              {item.nome[0].toUpperCase() +
                                item.nome.substring(1)}
                            </span>
                            <span className="text-gray-500">
                              {item.descricao[0].toUpperCase() +
                                item.descricao.substring(1)}
                            </span>
                          </div>
                          <span className="w-1/2 flex justify-end items-center text-xl text-gray-800 font-bold opacity-80">
                            R$ {item.preco.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          }) : <span className="text-gray-100">{status}</span>}
        </main>
      </div>
    );
  } else {
    return (
      <div
        style={backgroundImageStyle}
        className="w-screen h-screen flex justify-center items-center "
      >
        <Header />
        <Nav itens={["Salgados", "Doces", "Bebidas"]} />
        <main className="container top-20 bottom-0 fixed overflow-y-scroll flex justify-center items-center">
          <VscLoading size={50} className="text-gray-100 animate-spin" />
        </main>
      </div>
    );
  }
}

export default Home;
