import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search'
import Header from '../components/Header';

export default function BeersListPage() {
  const [beers, setBeers] = useState([]);
  const [filteredBeer, setFilteredBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);
  }, []);

  function filterBeer(string) {
    if (beers.name === "") {
      setFilteredBeer(beers);
    } else {
      setFilteredBeer(
        beers.filter((beers) =>
          beers.name.toLowerCase().includes(string.toLowerCase())
        )
      );
    }
  }

  return (
    <div>
      <Header />
      <h3>List of Beers</h3>
      <Search filterBeer={filterBeer} />
      {filteredBeer.map((beer) => (
        <div key={beer._id} className="card">
          <Link to={`/beers/${beer._id}`}>
            <div className="beer-card">
              <img className="beer-image" src={beer.image_url} alt="beer" />
              <div className="beer-info">
                <p>{beer.name}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
