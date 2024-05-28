/* import { getPokemon } from './generics/get-pokemon';




getPokemon(4)
    .then( pokemon => console.log( pokemon ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )



 */


    // decoradores 

    import { Pokemon } from './decorators/pokemon-class';



    const charmander = new Pokemon('Charmander');
    
    // (Pokemon.prototype as any).customName = 'Pikachu'
    
    // console.log(charmander.savePokemonToDB(50));
    // charmander.savePokemonToDB(10);
    charmander.publicApi = 'https://fernando-herrera.com';
    console.log( charmander )
    