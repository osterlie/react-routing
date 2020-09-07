import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, /*NavLink,*/ Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import NotFound from './components/Home/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Shishi from './components/Home/Shishi'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch> 
        <Shishi /> 
        <Footer />
      </div>
    </Router>

  );
}

export default App;
