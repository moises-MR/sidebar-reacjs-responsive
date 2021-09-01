import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import logo from "../assets/logo.png"



const Header = () => {

    const [visibleLeft, setVisibleLeft] = useState(false);


    return ( 
<Div1>

    <Div2>
    <img src={logo} alt="logo"/>
    <h1><span>CABALLERIZAS DESMONTABLES</span></h1>
    
    </Div2>

<ul>
    
    <li><a href="/"  >Nosotros</a></li>
    <li><a href="/"  >Catalogo</a></li>
    <li><a href="/"  >Contacto</a></li>
</ul>


<Sidebar className="sidebar" visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
<Div2>
    <img className="imgSidebar" src={logo} alt="logo"/>
    <h1><span>CABALLERIZAS DESMONTABLES</span></h1>
</Div2>

<ul>
<li><a href="/"  >Nosotros</a></li>
<li><a href="/"  >Catalogo</a></li>
<li><a href="/"  >Contacto</a></li>
</ul>
</Sidebar>

<Button icon="pi pi-bars" onClick={() => setVisibleLeft(true)} className={visibleLeft ? "p-mr-2 menu btnMenuBackgroud" : "p-mr-2 menu"}  />


</Div1>
    );
}
 
export default Header;


const Div1 = styled.div`
width: 100%;
padding: 20px;
background-color: #243238;
display: flex;
align-items: center;







ul{
display: none;
align-items: center;
justify-content: flex-end;
width: 90%;

@media(min-width:886px){
    display:flex;
}
li{
    list-style:none;
    margin-left: 30px;
    margin-right: 10px;
    a{
    margin: 10px;
    color: #FFF;
    transition: .4s;
    text-decoration:none;
    font-size: 17px;

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

h1{
    font-size: 20px;
    color: #FFF;
    margin-left: 30px;
    font-weight: 400;
    transition: 0.6s;
    &:hover{
        color: #fb8717;
    }
    @media(max-width:886px){

    font-size: 17px;

}
}


img{
    width: 10%;
    margin-left: 15px;

@media(max-width:468px){
 width: 20%;
}

@media(max-width:886px){
 width: 10%;
 margin: 0;

}

@media(max-width:686px){
 width: 15%;
 margin: 0;
}
}


`
