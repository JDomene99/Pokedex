export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemons = async (limit = 9, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
        
    } catch (err) {}
};

export const getPokemonByType = async (type) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
        const data = await response.json();
        return data.pokemon;
        
    } catch (err) {}
};
export const getPokemonByRegion = async (region) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${region}`);
        const data = await response.json();
        return data.pokemon_species;
        
    } catch (err) {}
};