import { Link } from "react-router-dom";
import styled from "styled-components"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Service = ({img1,img2,img3,img4,model,ruta}) => {


  function saveCoords (e) {
    sessionStorage.setItem("coords", JSON.stringify({
      y: window.scrollY,
      x: window.scrollX
    }));
  }


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          // slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
     
        <Carousel
        
        className="mt-20"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >

        <DivImg  onClick={saveCoords}>
         

          <Link to={`/catalogo/${ruta}`}>
        <Img src={img1}/>
        <P2>{model}</P2>
          </Link>
        </DivImg>
       
        
        <DivImg onClick={saveCoords}>

          <Link to={`/catalogo/${ruta}`}>
        <Img src={img2}/>
        <P2>{model}</P2>
        </Link>
        </DivImg>

        <DivImg onClick={saveCoords}>
   
          <Link to={`/catalogo/${ruta}`}>
        <Img src={img3}/>
        <P2>{model}</P2>
        </Link>
        </DivImg>

        <DivImg onClick={saveCoords}>

          <Link to={`/catalogo/${ruta}`}>
        <Img src={img4}/>
        <P2>{model}</P2>
        </Link>
        </DivImg>
        
        </Carousel>
      );
}
 
export default Service;

const Img = styled.img`
  width: 70%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  box-shadow: rgba(0, 0, 0, 0.45) 25px 25px 20px -20px;

  transition: .5s;
  &:hover{
        transform:scale(1.1)
    }

  @media(max-width:468px){
    width: 80%;
  }
`


const DivImg = styled.div`

display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 30px;
cursor: pointer;
a{
  margin-left: auto;
  margin-left: auto;
  text-align: center;
  text-decoration: none;
  color:#000;
 
}
`


const P2 = styled.p `
    margin: 10px;
    letter-spacing: 1px;
      font-weight: 600; 

`


// const Div1 = styled.div`


// width: 100%;
// background-color: aliceblue;
// height: 100%;
// `
