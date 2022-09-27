import styled from "styled-components"
import caballeriza1 from "../assets/caballeriza1.png"


const AboutMe = () => {
    return (
        <>
        <DivLines>
        <DivLine></DivLine>
        <DivCircle></DivCircle>
        <DivLine></DivLine>
        </DivLines>
    
    <Div1 id="aboutMe">
        <Div2>
        <div></div>

        <img src={caballeriza1} alt="caballerizas desmotables guadalajara" />
        </Div2>

        <Div3>
        <P1>Acerca de Nosotros</P1>
        <div></div>
        <P2>Somos una empresa dedicada a la construcción de caballerizas desmontables y ventas de accesorios, todas nuestras caballerizas están fabricadas con materiales premium y trabajos de herrería con cortes finos.</P2>
        <P2>Nuestro personal está capacitado para atender cualquier complicación, nos especializamos en darte la mayor calidad al mejor precio estamos ubicados en <span>Guadalajara, Jal México</span>.</P2>
        </Div3>

    </Div1> 
    </>
     );
}
 
export default AboutMe;

const Div1 = styled.div`
display: flex;
padding: 30px;
margin-top: 40px;
overflow-x: hidden;


@media(max-width:886px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


`


const Div2 = styled.div`
width: 50%;
display: flex;
@media(max-width:886px){
    width: 100%;
    align-items: center; 
    justify-content: center;
}

img{
    width: 70%;
    margin-left: 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media(max-width:986px){
    width: 90%;
    margin: 0;
       
    }
    @media(max-width:886px){
    width: 70%;
        margin: 0;
       
    }
    @media(max-width:586px){
        margin: 0;
         width: 90%;
    }
}

div{
    width: 80%;
    height: 60%;
    background-color: #d1ad8d94;
    position: absolute;
    clip-path: polygon(0% 0%, 89% 0, 100% 50%, 89% 100%, 0% 100%);
    z-index: -1;
    margin-top: 50px;
    /* margin-left:50px; */
    @media(max-width:886px){
         display: none; 
    

   

    }


}




`

const Div3 = styled.div`
width: 50%;
@media(max-width:886px){
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 80px;
}





div{
    width: 80%;
    height: 60%;
    background-color: #d1ad8d6e;
    position: absolute;
    clip-path: polygon(0% 0%, 89% 0, 100% 50%, 89% 100%, 0% 100%);
    z-index: -1;
    margin-top: 150px;
    /* margin-left:50px; */
    @media(min-width:886px){
        display: none; 
    

    }


}
`



const P1 = styled.p`
    font-weight: 500;
    font-style: normal;
    font-family: 'Lora', serif;
    color: #2f2c2f;
    font-size: 48px;
    line-height: 1.4;
    letter-spacing: 2px;
    margin-bottom: 40px;
    margin-top: 80px;
    margin-right: 30px;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    @media(max-width:886px){
        text-align:center;
        font-size: 40px;
        margin-right: 0px;

    }
    @media(max-width:686px){
        text-align:center;
        font-size: 32px;
    }
    @media(max-width:486px){
        text-align:center;
        font-size: 28px;
    }
    
`

const P2 = styled.p`
    font-weight: 400;
 
    color: #333333;
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
    margin-right:30px;

    span{
        font-weight: bold;
    }
    @media(max-width:886px){
        margin-right: 0px;
        text-align:center;
        font-size: 18px;
        /* font-weight: 500; */
    }
  
  

`

const DivLine = styled.div`
    content: "";
    width: 6%;
    height: 3px;
    background-color: #a88d78;
    @media(max-width:886px){
      
    width: 10%;

    }
    @media(max-width:686px){
        width: 15%;
  
    }
    @media(max-width:486px){
    width: 16%;
     
    }

`

const DivCircle = styled.div`
    content: "";
    width: 20px;
    height: 20px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background-color: #a88d78;
    margin-left: 50px;
    margin-right: 50px;
   

`

const DivLines = styled.div`

display: flex;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 50px;


`