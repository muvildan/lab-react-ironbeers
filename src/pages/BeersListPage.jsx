import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';

export default function BeersListPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      <h3>List of Beers</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt="beer" />
            <p>{beer.name}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
