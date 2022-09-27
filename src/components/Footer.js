import styled from "styled-components";
import Logo from "../assets/logo.png"
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { ImWhatsapp } from 'react-icons/im';


const Footer = () => {

    // console.log(window.innerWidth)
    return (
      <>
      <Div1>
        <Div2>
          <img src={Logo} alt="caballerizas guadalajara" />
          <h2>caballerizas desmontables</h2>
        </Div2>

        <Div3>
          <div>
            <BiMailSend size={25} color="#ef8c3b" />
            <a href="mailto:caballerizasdesmontables@gmail.com">caballerizasdesmontables@gmail.com</a>
          </div>

          <div>
            <BiPhoneCall
              style={{ marginRight: "10px" }}
              size={25}
              color="#ef8c3b"
            />{" "}
            <a href="tel:+52-333-198-2114">+52 33 31 98 21 14</a>
          </div>
        </Div3>

        <Div4>
          <div className="icon face">
            <FaFacebookF
              onClick={() =>
                (window.location =
                  "https://www.facebook.com/CaballerizasDesmontablesGDL")
              }
              size={25}
              color="#f4f4f4"
            />
          </div>

          <div className="icon insta">
            <IoLogoInstagram
              onClick={() =>
                (window.location =
                  "https://www.instagram.com/caballerizas_desmontables_")
              }
              size={25}
              color="#f4f4f4"
            />
          </div>

          <div className="icon whats">
            <ImWhatsapp
              onClick={() =>
                (window.location =
                  "https://api.whatsapp.com/send?text=Hola me podrias dar mas informacion&phone=+523331982114")
              }
              size={25}
              color="#f4f4f4"
            />
          </div>
        </Div4>
      </Div1>
      <DivDerechos>
        <a href="/">©copyright 2020</a>
        <a href="https://www.facebook.com/marketingdigitalimpuls">Creada por © IMPULSA.</a>
        <p>Todos los derechos reservados.</p>
      </DivDerechos>
      </>
    );
}
 
export default Footer;

const Div1 = styled.footer`
display: flex;
background-color: #243238;
margin-top: 150px;
padding: 50px;
height: 300px;
width: 100%;





a{
color: #f4f4f4;
margin-left: 10px;
transition: color .5s;
text-decoration: none;
  &:hover{
      /* text-decoration: underline; */
      color: #ef8c3b
  }

    }







@media(max-width:886px){
    flex-direction: column;
    height: auto;
}
`

const Div2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
img{
    width:20%;

    @media(max-width:700px){
    width:24%;
    
    }
}


h2{
    color: #f4f4f4;
    font-weight: 400;
    margin-left: 30px;
    letter-spacing: 1px;
    transition: color 1s;
    &:hover{
      color: #ef8c3b
  }

  @media(max-width:886px){
        font-size: 20px;
        margin-top: 20px;
        margin-left: 0;
        margin-bottom: 15px;
        text-align: center;

    }

}


@media(max-width:886px){ 
 width: 100%;
 margin-top:30px;
 flex-direction: column;

}



`

const Div3 = styled.div`

width: 33%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;



div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
    p{
color: #f4f4f4;
  margin-left: 10px;
  transition: color .5s;
  &:hover{
      /* text-decoration: underline; */
      color: #ef8c3b
  }

    }



    
    }

   
@media(max-width:886px){ 
 width: 100%;
 margin-top:5px;
} 
`
const Div4 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 33%;


@media(max-width:886px){
    width: 100%;
    margin-top:40px;
    }

`



const DivDerechos = styled.div`
background-color: #243238;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

a{
  display: inline-block;
  color:#FFF;
  text-decoration: none;
  margin-top: 3px;
  letter-spacing: .5px;
  transition: color .5s;
  &:hover{
    color: #ef8c3b

  }
}


p{
  color:#FFF;
  margin-top: 3px;
  letter-spacing: .5px;

}

`
