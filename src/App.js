import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css"
import HomePage from './pages/HomePage';
import Error404 from './components/Error404';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="*" component={Error404}/>
    </Switch>

    </BrowserRouter>
    </>
)

}

export default App;
