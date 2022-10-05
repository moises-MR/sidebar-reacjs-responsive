import styled from "styled-components";
import Service from "./Service";
import ocoImg1 from "../../assets/modelo ocotlan/img1.jpg";
import ocoImg2 from "../../assets/modelo ocotlan/img2.jpg";
import ocoImg3 from "../../assets/modelo ocotlan/img3.jpg";
import ocoImg4 from "../../assets/modelo ocotlan/img4.jpg";
import cajiImg1 from "../../assets/modelo cajititlan/img1.jpg";
import cajiImg2 from "../../assets/modelo cajititlan/img2.jpg";
import cajiImg3 from "../../assets/modelo cajititlan/img3.jpg";
import cajiImg4 from "../../assets/modelo cajititlan/img4.jpg";
import cuyutlanImg1 from "../../assets/modelo cuyutlan/img1.jpg";
import cuyutlanImg2 from "../../assets/modelo cuyutlan/img2.jpg";
import cuyutlanImg3 from "../../assets/modelo cuyutlan/img3.jpg";
import cuyutlanImg4 from "../../assets/modelo cuyutlan/img4.jpg";
import tapalpaImg1 from "../../assets/modelo tapalpa/img1.jpg";
import tapalpaImg2 from "../../assets/modelo tapalpa/img2.jpg";
import tapalpaImg3 from "../../assets/modelo tapalpa/img3.jpg";
import tapalpaImg4 from "../../assets/modelo tapalpa/img4.jpg";
import tonalaImg1 from "../../assets/modelo tonala/img1.jpg";
import tonalaImg2 from "../../assets/modelo tonala/img2.jpg";
import tonalaImg3 from "../../assets/modelo tonala/img3.jpg";
import tonalaImg4 from "../../assets/modelo tonala/img4.jpg";
import tequielaImg1 from "../../assets/modelo tequila/img1.jpg";
import tequielaImg2 from "../../assets/modelo tequila/img2.jpg";
import tequielaImg3 from "../../assets/modelo tequila/img3.jpg";
import tequielaImg4 from "../../assets/modelo tequila/img4.jpg";

import arandasImg1 from "../../assets/modelo arandas/1.png";
import arandasImg2 from "../../assets/modelo arandas/2.png";
import arandasImg3 from "../../assets/modelo arandas/3.png";
import arandasImg4 from "../../assets/modelo arandas/4.png";

import tepatitlanImg1 from "../../assets/modelo tepatitlan/1.png";
import tepatitlanImg2 from "../../assets/modelo tepatitlan/2.png";
import tepatitlanImg3 from "../../assets/modelo tepatitlan/3.png";
import tepatitlanImg4 from "../../assets/modelo tepatitlan/4.png";

const Services = () => {
  return (
    <>
      <P1 id="catalogo">Modelos de Caballerizas</P1>
      <Div1>
        <Service
          img1={ocoImg1}
          img2={ocoImg2}
          img3={ocoImg3}
          img4={ocoImg4}
          model="Modelo Ocotlan"
          ruta="ocotlan"
        />
        <Service
          img1={cajiImg1}
          img2={cajiImg2}
          img3={cajiImg3}
          img4={cajiImg4}
          model="Modelo Cajititlan"
          ruta="cajititlan"
        />
        <Service
          img1={cuyutlanImg1}
          img2={cuyutlanImg2}
          img3={cuyutlanImg3}
          img4={cuyutlanImg4}
          model="Modelo Cuyutlan"
          ruta="cuyutlan"
        />
        <Service
          img1={tapalpaImg1}
          img2={tapalpaImg2}
          img3={tapalpaImg3}
          img4={tapalpaImg4}
          model="Modelo Tapalpa"
          ruta="tapalpa"
        />
        <Service
          img1={tonalaImg1}
          img2={tonalaImg2}
          img3={tonalaImg3}
          img4={tonalaImg4}
          model="Modelo Tonala"
          ruta="tonala"
        />
        <Service
          img1={tequielaImg1}
          img2={tequielaImg2}
          img3={tequielaImg3}
          img4={tequielaImg4}
          model="Modelo Tequila"
          ruta="tequila"
        />

        <Service
          img1={arandasImg1}
          img2={arandasImg2}
          img3={arandasImg3}
          img4={arandasImg4}
          model="Modelo Arandas"
          ruta="arandas"
        />

        <Service
          img1={tepatitlanImg1}
          img2={tepatitlanImg2}
          img3={tepatitlanImg3}
          img4={tepatitlanImg4}
          model="Modelo Tepatitlan"
          ruta="tepatitilan"
        />
      </Div1>
    </>
  );
};

export default Services;

const P1 = styled.p`
  font-weight: 500;
  font-style: normal;
  font-family: "Lora", serif;
  color: #a88d78;
  font-size: 30px;
  line-height: 1.4;
  letter-spacing: 1px;
  margin-bottom: 50px;
  margin-top: 100px;
  margin-right: 30px;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  @media (max-width: 886px) {
    text-align: center;
    font-size: 30px;
    margin-right: 0px;
  }
  @media (max-width: 686px) {
    text-align: center;
    font-size: 27px;
  }
  @media (max-width: 486px) {
    text-align: center;
    font-size: 23px;
  }
`;

const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 786px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 586px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// const Img = styled.img`
//   width: 60%;
//   border-radius: 5px;
//   margin-left: auto;
//   margin-right: auto;
// `

// const DivImg = styled.div`

// display: flex;
// width: 100%;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// `

// const P2 = styled.p `
//     margin: 10px;
//     letter-spacing: 1px;
//       font-weight: 600;

// `
