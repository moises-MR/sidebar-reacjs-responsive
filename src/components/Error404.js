import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "./Header2";
import Footer from "./Footer";
import Error404Img from "../assets/404.png"

const Error404 = () => {

  



    return (
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{duration:0.5}}
      >
        <Header/>
        <Div1>  
          <div>
          <img src={Error404Img} alt="error 404 png" />
          </div>
          <h3 id="texto">PAGINA NO ENCONTRADA</h3>
          <Link to="/">REGRESAR AL INICIO</Link>
          
        </Div1>
        <Footer/>
      </motion.div>
    );
}
 
export default Error404;


const Div1 = styled.div`

width: 100%;

/* background-color: aliceblue; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



a{
    width: fit-content;
    display: block;
    font-weight: 500;
    font-size: 17px;
    padding: 10px 15px;
    text-align: center;
    cursor: pointer;
    margin-top: 30px;
    border-radius: 6px;
    border: none;
    background-color: #ef8c3b;
    color: #FFF;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
    background-color: #fda65f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }    
    }





h3{
  color: #ff422e;
  font-size: 30px;
  text-align: center;
  margin: 15px;
}

div{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  img{
    width: 50%;
  }
}
`