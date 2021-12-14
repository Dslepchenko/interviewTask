import React from 'react';
import Grid from './Grid';
import movies from './mocks/data_a';
import pokemon from './mocks/data_b';
import { pokemonConfig, moviesConfig } from './utils/config';

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid config={moviesConfig} data={movies} />
    <h2>Pokemon</h2>
    <Grid config={pokemonConfig} data={pokemon} />
  </div>
);

export default App;
