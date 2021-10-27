// import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListVehicle from './components/ListVehicle';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateVehicle from './components/CreateVehicle';
import UpdateVehicle from './components/UpdateVehicle';
import ViewVehicle from './components/ViewVehicle';

function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container_main">
                    <Switch> 
                          <Route path = "/" exact component = {ListVehicle}></Route>
                          <Route path = "/vehicles" component = {ListVehicle}></Route>
                          <Route path = "/add-vehicle/:id" component = {CreateVehicle}></Route>
                          <Route path = "/view-vehicle/:id" component = {ViewVehicle}></Route>
                          <Route path = "/update-Vehicle/:id" component = {UpdateVehicle}></Route>
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;
