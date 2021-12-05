import './App.css';
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import BeersListPage from './pages/BeersListPage.jsx';
import BeerDetailsPage from './pages/BeerDetailsPage.jsx';
import RandomBeer from './pages/RandomBeer.jsx';
import AddBeerPage from './pages/AddBeerPage.jsx';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersListPage} />
        <Route exact path="/beers/:id" component={BeerDetailsPage} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddBeerPage} />
      </Switch>
    </div>
  );
}
