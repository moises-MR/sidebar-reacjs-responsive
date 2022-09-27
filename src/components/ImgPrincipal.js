import React from 'react';
import styled from "styled-components";
import ImgPrin from "../assets/imgPrincipal.jpg";




const ImgPrincipal = () => {
  
   
    
   
    return ( 
        <Div1 >
            <Div2>
            <h1>caballerizas desmontables</h1>
            <h2>cuidamos lo que te apasiona</h2>
            <a href="https://api.whatsapp.com/send?text=Hola me podrias dar mas informacion&phone=+523331982114"  >contactar</a>
            </Div2>

            <img src={ImgPrin} alt="caballerizas desmotables" />

        </Div1>
     );
}
 
export default ImgPrincipal;


const Div1 = styled.div`
position: relative;
width: 100%;
height: 100%;
top: 0;
display: flex;
justify-content: center;
overflow-x: hidden;


h1{
    color: #FFF;
    font-weight: 400;
    font-size: 75px;
    line-height: 1.3;
    letter-spacing: 2px;
    width: 30%;
    font-family: 'Lora', serif;
    text-transform: capitalize;

   
    @media(max-width:686px){
        font-size: 45px;
    }
 
}
h2{
    color: #FFF; 
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 2px;

    @media(max-width:686px){
        font-size: 15px;
    }
}





img{
transition: 0.3s;
z-index: -1;

    @media(min-width:886px){
        width: 120%;
    }
    @media(max-width:886px){
        width: 150%;
        margin-left: 50px;

    }
    @media(max-width:786px){
        width: 200%;
        margin-left: 100px;

    }
    @media(max-width:686px){
        width: 250%;
        margin-left: 200px;

    }
    @media(max-width:586px){
        width: 300%;
        margin-left: 300px;

    }
    @media(max-width:486px){
        width: 400%;
        margin-left: 400px;
    }
    /* width: 500%; */
}

`


const Div2 = styled.div`
    position: absolute;
    top:32%;
    left: 20px;
 
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
    transition: .8s;
    &:hover{
    background-color: #fda65f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }    
    }
`



