import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

import imgOcotlan1 from "../assets/modelo ocotlan/img1.jpg";
import imgOcotlan2 from "../assets/modelo ocotlan/img2.jpg";
import imgOcotlan3 from "../assets/modelo ocotlan/img3.jpg";
import imgOcotlan4 from "../assets/modelo ocotlan/img4.jpg";
import imgOcotlan5 from "../assets/modelo ocotlan/img5.jpg";
import imgOcotlan6 from "../assets/modelo ocotlan/img6.jpg";

import imgTequila1 from "../assets/modelo tequila/img1.jpg";
import imgTequila2 from "../assets/modelo tequila/img2.jpg";
import imgTequila3 from "../assets/modelo tequila/img3.jpg";
import imgTequila4 from "../assets/modelo tequila/img4.jpg";
import imgTequila5 from "../assets/modelo tequila/img5.jpg";
import imgTequila6 from "../assets/modelo tequila/img6.jpg";

import imgTapalpa1 from "../assets/modelo tapalpa/img1.jpg";
import imgTapalpa2 from "../assets/modelo tapalpa/img2.jpg";
import imgTapalpa3 from "../assets/modelo tapalpa/img3.jpg";
import imgTapalpa4 from "../assets/modelo tapalpa/img4.jpg";
import imgTapalpa5 from "../assets/modelo tapalpa/img5.jpg";
// import imgTapalpa6 from "../assets/modelo tapalpa/img6.jpg";
import imgTapalpa7 from "../assets/modelo tapalpa/img7.jpg";
import imgTapalpa8 from "../assets/modelo tapalpa/img8.jpg";
import imgTapalpa9 from "../assets/modelo tapalpa/img9.jpg";
import imgTapalpa10 from "../assets/modelo tapalpa/img10.jpg";
import imgTapalpa11 from "../assets/modelo tapalpa/img11.jpg";
import imgTapalpa12 from "../assets/modelo tapalpa/img12.jpg";
import imgTapalpa13 from "../assets/modelo tapalpa/img13.jpg";

import imgCoyutlan1 from "../assets/modelo cuyutlan/img1.jpg";
import imgCoyutlan2 from "../assets/modelo cuyutlan/img2.jpg";
// import imgCoyutlan3 from "../assets/modelo cuyutlan/img3.jpg";
import imgCoyutlan4 from "../assets/modelo cuyutlan/img4.jpg";

import imgTonala1 from "../assets/modelo tonala/img1.jpg";
import imgTonala2 from "../assets/modelo tonala/img2.jpg";
import imgTonala3 from "../assets/modelo tonala/img3.jpg";
import imgTonala4 from "../assets/modelo tonala/img4.jpg";
import imgTonala5 from "../assets/modelo tonala/img5.jpg";

import modArandas1 from "../assets/modelo arandas/1.png";
import modArandas2 from "../assets/modelo arandas/2.png";
import modArandas3 from "../assets/modelo arandas/3.png";
import modArandas4 from "../assets/modelo arandas/4.png";
import modArandas5 from "../assets/modelo arandas/5.png";

import modTepatitlan1 from "../assets/modelo tepatitlan/1.png";
import modTepatitlan2 from "../assets/modelo tepatitlan/2.png";
import modTepatitlan3 from "../assets/modelo tepatitlan/3.png";
import modTepatitlan4 from "../assets/modelo tepatitlan/4.png";
import modTepatitlan5 from "../assets/modelo tepatitlan/5.png";

import imgCajititilan1 from "../assets/modelo cajititlan/img1.jpg";
import imgCajititilan2 from "../assets/modelo cajititlan/img2.jpg";
import imgCajititilan3 from "../assets/modelo cajititlan/img3.jpg";
import imgCajititilan4 from "../assets/modelo cajititlan/img4.jpg";

import imgBebedero1 from "../assets/bebedero/img1.jpg";
import imgBebedero2 from "../assets/bebedero/img2.jpg";
import imgBebedero3 from "../assets/bebedero/img3.jpg";
import imgBebedero4 from "../assets/bebedero/img4.jpg";
import imgBebedero5 from "../assets/bebedero/img5.jpg";
import imgBebedero6 from "../assets/bebedero/img6.jpg";
import imgBebedero7 from "../assets/bebedero/img7.jpg";
import imgBebedero8 from "../assets/bebedero/img8.jpg";
import imgBebedero9 from "../assets/bebedero/img9.jpg";
import imgBebedero10 from "../assets/bebedero/img10.jpg";
import imgBebedero11 from "../assets/bebedero/img11.jpg";
import imgBebedero12 from "../assets/bebedero/img12.jpg";
import imgBebedero13 from "../assets/bebedero/img13.jpg";

import imgBañadero1 from "../assets/bañadero/img1.jpg";
import imgBañadero2 from "../assets/bañadero/img2.jpg";
import imgBañadero3 from "../assets/bañadero/img3.jpg";
import imgBañadero4 from "../assets/bañadero/img4.jpg";
import imgBañadero5 from "../assets/bañadero/img5.jpg";
import imgBañadero6 from "../assets/bañadero/img6.jpg";
import imgBañadero7 from "../assets/bañadero/img7.jpg";
import imgBañadero8 from "../assets/bañadero/img8.jpg";
import imgBañadero9 from "../assets/bañadero/img9.jpg";
import imgBañadero10 from "../assets/bañadero/img10.jpg";

import imgMontureros1 from "../assets/motureras/img1.jpg";
import imgMontureros2 from "../assets/motureras/img2.jpg";
import imgMontureros3 from "../assets/motureras/img3.jpg";

import logo from "../assets/LOGO_SIN_FONDO.png";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Catalogo = () => {
  const { producto } = useParams();

  const [produts, setProduts] = useState(null);

  useEffect(() => {
    if (
      producto === "tonala" ||
      producto === "cuyutlan" ||
      producto === "cajititlan" ||
      producto === "tapalpa" ||
      producto === "tequila" ||
      producto === "ocotlan" ||
      producto === "arandas" ||
      producto === "tepatitilan"
    ) {
      setProduts(`Caballeriza modelo ${producto}`);
    }

    if (
      producto === "bañaderos" ||
      producto === "bebederos" ||
      producto === "montureros"
    ) {
      setProduts(`${producto}`);
    }

    function posicionate() {
      window.scrollTo(0, 0);
    }
    posicionate();
  }, [producto]);

  const imagesCajititlan = [
    imgCajititilan1,
    imgCajititilan2,
    imgCajititilan3,
    imgCajititilan4,
  ];
  const imagesCuyutlan = [imgCoyutlan1, imgCoyutlan2, imgCoyutlan4];
  const imagesTonala = [
    imgTonala1,
    imgTonala2,
    imgTonala3,
    imgTonala4,
    imgTonala5,
  ];
  const imagesTapalpa = [
    imgTapalpa1,
    imgTapalpa2,
    imgTapalpa3,
    imgTapalpa4,
    imgTapalpa5,
    imgTapalpa7,
    imgTapalpa8,
    imgTapalpa9,
    imgTapalpa10,
    imgTapalpa11,
    imgTapalpa12,
    imgTapalpa13,
  ];
  const imgaesTequila = [
    imgTequila1,
    imgTequila2,
    imgTequila3,
    imgTequila4,
    imgTequila5,
    imgTequila6,
  ];
  const imagesOcotlan = [
    imgOcotlan1,
    imgOcotlan2,
    imgOcotlan3,
    imgOcotlan4,
    imgOcotlan5,
    imgOcotlan6,
  ];
  const imageBebederos = [
    imgBebedero1,
    imgBebedero2,
    imgBebedero3,
    imgBebedero4,
    imgBebedero5,
    imgBebedero6,
    imgBebedero7,
    imgBebedero8,
    imgBebedero9,
    imgBebedero10,
    imgBebedero11,
    imgBebedero12,
    imgBebedero13,
  ];
  const imagesBañaderos = [
    imgBañadero1,
    imgBañadero2,
    imgBañadero3,
    imgBañadero4,
    imgBañadero5,
    imgBañadero6,
    imgBañadero7,
    imgBañadero8,
    imgBañadero9,
    imgBañadero10,
  ];

  const imagesArandas = [
    modArandas1,
    modArandas2,
    modArandas3,
    modArandas4,
    modArandas5,
  ];

  const imagesTepatitlan = [
    modTepatitlan1,
    modTepatitlan2,
    modTepatitlan3,
    modTepatitlan4,
    modTepatitlan5,
  ];
  const imagesMontureros = [imgMontureros1, imgMontureros2, imgMontureros3];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header2 />
      <Div1>{produts !== null && <h1>{produts}</h1>}</Div1>

      <Div2>
        {produts !== null && (
          <Zoom>
            {producto === "tonala" &&
              imagesTonala.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}
            {producto === "ocotlan" &&
              imagesOcotlan.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}
            {producto === "cajititlan" &&
              imagesCajititlan.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}
            {producto === "cuyutlan" &&
              imagesCuyutlan.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}
            {producto === "tapalpa" &&
              imagesTapalpa.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}
            {producto === "tequila" &&
              imgaesTequila.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            {producto === "montureros" &&
              imagesMontureros.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            {producto === "bebederos" &&
              imageBebederos.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            {producto === "bañaderos" &&
              imagesBañaderos.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            {producto === "arandas" &&
              imagesArandas.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            {producto === "tepatitilan" &&
              imagesTepatitlan.map((img, index) => (
                <Img
                  key={index}
                  src={img}
                  alt={`Caballeriza ${producto} ${index}`}
                />
              ))}

            <Img src={logo} />
          </Zoom>
        )}
      </Div2>

      <Footer />
    </motion.div>
  );
};

export default Catalogo;

const Div1 = styled.div`
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    font-style: normal;
    font-family: "Lora", serif;
    color: #2f2c2f;
    margin-top: 60px;
    margin-bottom: 60px;
    text-transform: capitalize;

    @media (max-width: 786px) {
      font-size: 2em;
    }
  }
`;

const Div2 = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;

  @media (max-width: 786px) {
    width: 90%;
  }
`;
