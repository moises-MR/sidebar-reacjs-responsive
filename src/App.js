import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom"
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css"
import HomePage from './pages/HomePage';
import Error404 from './components/Error404';
import Catalogo from "./pages/Catalogo"
import { AnimatePresence } from "framer-motion";


function App() {


  const location = useLocation();
  return (
    <AnimatePresence  exitBeforeEnter>
    <Switch location={location} key={location.pathname}>

    <Route exact  path="/" component={HomePage}/>
    <Route exact  path="/catalogo/:producto" component={Catalogo}/>
    <Route path="*" component={Error404}/>
    </Switch>


    </AnimatePresence>
)

}

export default App;
