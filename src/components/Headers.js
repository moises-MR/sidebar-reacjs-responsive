import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';





const Header = () => {

   

    const [visibleLeft, setVisibleLeft] = useState(false);


     

    return (
      <Div1 >
        <Div2>
          <Link to="/">
          <img
            src={logo}
            alt="logo"
          />
          </Link>
          {/* <h1>caballerizas desmontables</h1> */}
        </Div2>

        <ul>
          <li>
            <a  href="#aboutMe">Nosotros</a>
          </li>
          <li>
            <a  href="#catalogo">Catalogo</a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?text=Hola me podrias dar mas informacion&phone=+523331982114">Contacto</a>
          </li>
        </ul>

        <Sidebar
          className="sidebar"
          visible={visibleLeft}
          onHide={() => setVisibleLeft(false)}
        >
          <Div3>
          <Link to="/">
            <img
              className="imgSidebar"
              src={logo}
              alt="logo"
              onClick={()=>setVisibleLeft(false)}
            />
            </Link>
            {/* <h1>caballerizas desmontables</h1> */}
            <ul>
              <li>
                <a onClick={() => setVisibleLeft(false)} href="#aboutMe">
                  Nosotros
                </a>
              </li>
              <li>
                <a onClick={() => setVisibleLeft(false)} href="#catalogo">
                  Catalogo
                </a>
              </li>
              <li>
                <a onClick={() => setVisibleLeft(false)} href="https://api.whatsapp.com/send?text=Hola me podrias dar mas informacion&phone=+523331982114">
                  Contacto
                </a>
              </li>
            </ul>

            <p>©copyright 2020</p>
            <p>Todos los derechos reservados.</p>
          </Div3>
        </Sidebar>

        <Button
          icon="pi pi-bars"
          onClick={() => setVisibleLeft(true)}
          className={
            visibleLeft ? "p-mr-2 menu btnMenuBackgroud" : "p-mr-2 menu"
          }
        />
      </Div1>
    );
}
 
export default Header;


const Div1 = styled.div`
width: 100%;
padding: 20px;
/* background-color: #243238;     */
display: flex;
align-items: center;
position: absolute;
z-index: 10;





ul{
display: none;
align-items: center;
justify-content: flex-end;
width: 90%;
@media(min-width:886px){
    display:flex;
margin-right: 100px;

}
li{
    list-style:none;
    margin-left: 30px;
    
    a{
    margin: 10px;
    transition: .4s;
    text-decoration:none;
    font-size: 17px;
    font-weight: 400;  
    color:#FAFAFA; 
    &:hover{
        color: #fb8717;
    }
    }
}




}
`




const Div2 = styled.div`

display: flex;
align-items: center;
width: 100%;
h1{
    font-size: 20px;
    color: #FFF;
    margin-left: 30px;
    transition: 0.6s;
    text-transform: uppercase;
    &:hover{
        color: #fb8717;
    }
    @media(max-width:886px){

    font-size: 17px;

}
}



img{
    width: 15%;
    margin-left: 15px;

@media(max-width:468px){
 width: 20%;
}

@media(max-width:886px){
 width: 10%;
 margin: 0;

}

@media(max-width:686px){
 width: 18%;
 margin: 0;
}

@media(max-width:486px){
 width: 25%;
 margin: 0;
}

}


`


const Div3 = styled.div`

display: flex;
flex-direction: column;
justify-content: center;

img{
    display: block;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 30% !important;
    margin-bottom: 50px !important;
}
ul li a{
 margin-top: 45px;
 margin-bottom: 35px;
 
}



p{
letter-spacing: 3px;
margin-top: 10px;
}
`
