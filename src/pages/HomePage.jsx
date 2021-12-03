import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <Link to="/beers">
        <img
          className="home-img"
          src={require('../assets/beers.png')}
          alt="List of Beers"
        />
        <div className="container">
          <h2>LIST OF BEERS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            massa id nisl feugiat dapibus sed ac neque. Donec id commodo ligula,
            non mattis justo. Etiam tincidunt et velit quis elementum. Sed eu
            ultrices nunc. In ac augue lacus. Morbi elit lacus, suscipit
            sollicitudin mattis at, malesuada eu nulla. Donec quis egestas
            libero. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nam ultricies semper mi. Ut iaculis velit vitae est
            gravida dapibus. Nam sed elit enim. Etiam ac metus ut velit
            elementum lacinia eu a nisi. Praesent tempor condimentum ante vel
            porttitor. Quisque varius vestibulum magna.
          </p>
        </div>
      </Link>

      <div>
        <Link to="/beers/random">
          <img
            className="home-img"
            src={require('../assets/random-beer.png')}
            alt="Random Beer"
          />
          <div className="container">
            <h2>RANDOM BEER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              massa id nisl feugiat dapibus sed ac neque. Donec id commodo
              ligula, non mattis justo. Etiam tincidunt et velit quis elementum.
              Sed eu ultrices nunc. In ac augue lacus. Morbi elit lacus,
              suscipit sollicitudin mattis at, malesuada eu nulla. Donec quis
              egestas libero. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Nam ultricies semper mi. Ut iaculis velit vitae est
              gravida dapibus. Nam sed elit enim. Etiam ac metus ut velit
              elementum lacinia eu a nisi. Praesent tempor condimentum ante vel
              porttitor. Quisque varius vestibulum magna.
            </p>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/new-beer">
          <img
            className="home-img"
            src={require('../assets/new-beer.png')}
            alt="New Beer"
          />
          <div className="container">
            <h2>ADD A NEW BEER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              massa id nisl feugiat dapibus sed ac neque. Donec id commodo
              ligula, non mattis justo. Etiam tincidunt et velit quis elementum.
              Sed eu ultrices nunc. In ac augue lacus. Morbi elit lacus,
              suscipit sollicitudin mattis at, malesuada eu nulla. Donec quis
              egestas libero. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Nam ultricies semper mi. Ut iaculis velit vitae est
              gravida dapibus. Nam sed elit enim. Etiam ac metus ut velit
              elementum lacinia eu a nisi. Praesent tempor condimentum ante vel
              porttitor. Quisque varius vestibulum magna.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
