import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function RandomBeer(){
    const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      <img src={randomBeer.image_url} alt="beer" />
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.attenuation_level}</p>
      <p>
        {randomBeer.tagline} {randomBeer.first_brewed}
      </p>
      <p>{randomBeer.brewers_tips}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}