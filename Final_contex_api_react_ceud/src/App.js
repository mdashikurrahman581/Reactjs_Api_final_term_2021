import React from 'react'; 
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';


function App() {
  return (
    <div className="app">
<UserProvider>
     <Router>
        <Switch>

           <Route path="/add">
              <Add/>
           </Route>

        <Route path="/edit/:id">
          <Edit/>
         </Route>

         <Route path="/read/:id">
          <Read/>
         </Route>         


        <Route path="/delete/:id">
             <Delete/>
         </Route>
              <Route path="/">
              <Home/>
              </Route>
        </Switch>
     </Router>
</UserProvider>
    </div>
  );
}

export default App;
