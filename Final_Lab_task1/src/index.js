import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Top from './Components/Top';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import Dpdetails from './Components/Dpdetails';
import {BrowserRouter as BRouter,Route,Switch} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    
    <BRouter>
          <Top/>
              <Switch>

                     <Route exact path ="/">
                        <Home/>
                     </Route>

                     <Route exact path ="/profile">
                     <Profile/>
                     </Route>

                     <Route exact path ="/contact">
                     <Contact/>
                     </Route>

                     <Route exact path ="/product/:id">
                     <ProductDetails/>
                     </Route>

                     <Route exact path ="/product/:id/:name">
                     <Dpdetails/>
                     </Route>
              
              </Switch>
          <Footer/>
    </BRouter>

          
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
