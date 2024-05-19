import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicePage from './component/ServicePage-1';
import Animation from './component/Animation' ;
import LandingPage from './component/LandingPage';
import NaviBar from './component/NaviBar';
import Footer from './component/Footer';
import Contact from './component/Contact';

const App = () => {
  return (
    <div>
      <NaviBar/>
      <ServicePage/>
      <Footer/>
    </div>
    

  );
};

export default App;
