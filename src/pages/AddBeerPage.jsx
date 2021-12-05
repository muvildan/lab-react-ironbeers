import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';

export default function AddBeerPage() {
  const [formState, setFormState] = useState({});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
      .then((response) => {
        setFormState({});
        history.push('/');
      })
      .catch(console.log);
  }

  function handleInput(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Header />
      <h1>ADD A NEW BEER</h1>
      <form className="new-beer-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={formState.name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleInput}
          value={formState.tagline}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={formState.description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleInput}
          value={formState.first_brewed}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleInput}
          value={formState.brewers_tips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInput}
          value={formState.attenuation_level}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInput}
          value={formState.contributed_by}
        />
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}
