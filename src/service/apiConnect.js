const urlBase = 'https://pokeapi.co/api/v2/';

const apiConnect = {
  async getTypes() {
    const url = `${urlBase}type`;
    const response = await fetch(url)
      .then((data) => data.json());
    return response;
  },
  async getAll(limit = 9, offset = 0) {
    const url = `${urlBase}pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url)
      .then((data) => data.json());
    return response;
  },
  async getPokemon(pokemon) {
    const url = `${urlBase}pokemon/${pokemon}`;
    const response = await fetch(url)
      .then((data) => data.json());
    return response;
  },
  async getSpecie(pokemonID) {
    const url = `${urlBase}pokemon-species/${pokemonID}`;
    const response = await fetch(url)
      .then((data) => data.json());
    return response;
  },
};

export default apiConnect;
