const Trailer = ({ data }) => (
    <a href={data.url}
       target="_blank"
       rel="noopener noreferrer">
      trailer...
    </a>
  );
  
  const PokemonName = ({ data }) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;
  
  const moviesConfig = [
    {
      title: 'id',
      field: 'imdbID'
    },
    {
      title: 'title',
      field: 'Title'
    },
    {
      title: 'rating',
      field: 'imdbRating',
    },
   {
     title: 'trailer',
     field: 'Trailer',
     component: Trailer
   }
  ];
  
  const pokemonConfig = [
    {
      title: 'pokedex #',
      field: 'number'
    },
    {
      title: 'name',
      field: 'name',
      component: PokemonName
    },
  ];

  export {pokemonConfig, moviesConfig}