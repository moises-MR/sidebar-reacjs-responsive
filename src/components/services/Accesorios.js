import { Link } from "react-router-dom";
import styled from "styled-components";
import bebedero from "../../assets/bebedero/img3.jpg" 
import bañadero from "../../assets/bañadero/img3.jpg" 
import motureras from "../../assets/motureras/img3.jpg" 


const Accesorios = () => {

    function saveCoords (e) {
        sessionStorage.setItem("coords", JSON.stringify({
          y: window.scrollY,
          x: window.scrollX
        }));
      }


    return (
        <>
        <P1>Accesorios</P1>

        <Div1 onClick={()=>{saveCoords()}}>

        
        <Div2>
        <Link to="/catalogo/bebederos">
        <img src={bebedero} alt="bebedero para caballos guadalajara"/>
        <P2>Bebederos</P2>
        </Link>
        </Div2>
        

        <Div2>
        <Link to="/catalogo/bañaderos">
        <img src={bañadero} alt="bañadero para caballos guadalajara"/>
        <P2>Bañaderos</P2>
        </Link>
        </Div2>

        <Div2>
        <Link to="/catalogo/montureros">
        <img src={motureras} alt="montureros para caballos guadalajara"/>
        <P2>Montureras</P2>
        </Link>
        </Div2>

        



        </Div1>
        </>
      );
}
 
export default Accesorios;


const P1 = styled.p`
    font-weight: 500;
    font-style: normal;
    font-family: 'Lora', serif;
    color: #a88d78;
    font-size: 30px;
    line-height: 1.4;
    letter-spacing: 1px;
    margin-bottom:50px;
    margin-top: 100px;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align:center;


    
`

const Div1 = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;


@media(max-width:786px){
flex-direction: column;

}
`

const Div2 = styled.div`
width: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


a{
    width: 100%;
    text-align: center;
    display: block;
    text-decoration: none;
    color:#000;
    img{
    width: 60%;
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    &:hover{
        transform:scale(1.1)
    }

    @media(max-width:786px){
    width: 50%;
    margin-top: 80px;
        }
    @media(max-width:586px){
    width: 80%;
    margin-top: 80px;
        }

    }


}

@media(max-width:786px){
width: 100%;

}
`

const P2 = styled.p`

margin: 15px;
letter-spacing: 1px;
font-weight: 600; 
position: relative;
z-index: 10;
`