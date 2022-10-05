import Header from "../components/Headers";
import ImgPrincipal from "../components/ImgPrincipal";
import AboutMe from "../components/AboutMe";
import Services from "../components/services/Services";
import Accesorios from "../components/services/Accesorios";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import React,{} from 'react';
import { ImWhatsapp } from 'react-icons/im';



const HomePage = () => {

  // function posicionate () {
  //   var coords = JSON.parse(sessionStorage.getItem("coords"));
  //   if (coords) {
  //     window.scrollTo(coords.x, coords.y);
  //     sessionStorage.removeItem("coords")
  //   }
  // }
  


  // useEffect(()=>{
  //   posicionate()
  // },[])
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <ImgPrincipal />
        <AboutMe />
        <Services />
        <Accesorios />

        <ImWhatsapp
          className="icon whats2"
          onClick={() =>
            (window.location =
              "https://api.whatsapp.com/send?text=Hola me podrías dar mas información&phone=+523331982114")
          }
          size={20}
          color="#f4f4f4"
        />

        <Footer />
      </motion.div>
    );
}
 
export default HomePage;