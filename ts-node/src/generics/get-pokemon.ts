import axios from 'axios'
import { Pokemon } from '../interfaces';




export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => {// retorno una promesa y devuelve ese tipo de dato

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`) // de tipo pokemon
    // console.log( data )

    return data;
}


// <> indica q es un generico