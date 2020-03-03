import React from 'react';
import './App.css';
import { NavBar } from './components/organisms';
import { ViewParks } from './pages'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CreatePark } from './pages'



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={ViewParks} />
        <Route exact path="/create-park" component={CreatePark} />
      </Router>
    </div>
  );
}

export default App;
