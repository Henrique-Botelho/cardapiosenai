import React, { useState } from "react";

import imagem1 from "../../assets/pizza.jpg";
import imagem2 from "../../assets/salgados.jpg";
import imagem3 from "../../assets/prato.jpg";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function Slider() {
  let x, y;

  const imgs = [
    {
      img: imagem1,
      tit: "Deliciosos Salgados!",
      msg: "Com os melhores preços",
    },
    {
      img: imagem2,
      tit: "Deliciosos Salgados!",
      msg: "Com os melhores preços",
    },
    {
      img: imagem3,
      tit: "Deliciosos Salgados!",
      msg: "Com os melhores preços",
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `url('${imgs[imgIndex].img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const nextIndex = () => {
    let indexAtual = imgIndex;
    if (indexAtual === imgs.length - 1) {
      indexAtual = 0;
      setImgIndex(indexAtual);
    } else {
      setImgIndex((indexAtual += 1));
    }
  };
  const prevsIndex = () => {
    let indexAtual = imgIndex;
    if (indexAtual === 0) {
      indexAtual = imgs.length - 1;
      setImgIndex(indexAtual);
    } else {
      setImgIndex((indexAtual -= 1));
    }
  };

  const handleTouchStar = (e) => {
    var touch = e.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;
  };
  const handleTouchMove = (e) => {
    var touch = e.changedTouches[0];
    x = touch.pageX - x;
    y = touch.pageY - y;
    if (Math.abs(x) > Math.abs(y)) {
      if (x < 0) {
        nextIndex();
      } else {
        prevsIndex();
      }
    }
  };

  return (
    <div
      className="w-full bg-gray-900 rounded"
      onTouchStart={handleTouchStar}
      onTouchMove={handleTouchMove}
    >
      <div
        style={backgroundImageStyle}
        className="w-full h-[70vh] relative duration-500"
      >
        <MdOutlineArrowBackIos
          size={30}
          className="text-gray-100 hover:cursor-pointer absolute top-[50%] left-0"
          onClick={prevsIndex}
        />
        <MdOutlineArrowForwardIos
          size={30}
          className="text-gray-100 hover:cursor-pointer absolute top-[50%] right-0"
          onClick={nextIndex}
        />
        <div className="absolute bottom-10 w-full text-center font-cherrybomb tracking-wide">
          <h4 id="comStroke" className="text-yellow-500 text-3xl sm:text-5xl">
            {imgs[imgIndex].tit}
          </h4>
          <span id="comStroke" className="text-gray-100 text-lg">
            {imgs[imgIndex].msg}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
