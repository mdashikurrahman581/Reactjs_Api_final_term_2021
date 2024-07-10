import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Allproduct from './components/Allproduct';
import Addproduct from './components/Addproduct';
import Check from './components/Check';
import Newnew from './components/Newnew';
import Home from './components/Home';
import Login from './components/Login';
import Out from './components/Out';
import Read from './components/Read/Read';
import Plogin from './components/Plogin';
function App() {
  return (
    <>
      <BrowserRouter>
        

        <Switch>

        <Route exact path="/login">
            <Plogin />
          </Route>
          <Route exact path="/logout">
            <Out />
          </Route>

          <Route exact path="/">
           <Navbar />
            <Home />
          </Route>
          <Route exact path="/products">
          <Navbar />
            <Allproduct />
          </Route>

          <Route exact path="/addproduct">
          <Navbar />
            <Addproduct />
          </Route>

          <Route exact path="/read/:id">
          <Navbar />
            <Read />
          </Route>

          <Route exact path="/check/:id">
          <Navbar />
            <Check />
          </Route>

          <Route exact path="/new/:id/:name/:p_id/:unit_price/:quantity/:description">
          <Navbar />
            <Newnew />
          </Route>



        </Switch>

      </BrowserRouter>

    </>
  );
}

export default App;
