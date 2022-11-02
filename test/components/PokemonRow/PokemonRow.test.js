/* eslint-disable */
import pokemonHelper from "../../../src/components/ComponentUtils/PokemonRow.helper.js";
import { pokemon } from "../../../src/datasets/pokemon.json";

test('should return the svg for fire icon', () => { 
    const result = pokemonHelper.typeToIcon('Fire');

    expect(result).toBe('src/assets/icons/fire.svg');
});

test('should return the svg for ice icon', () => { 
    const result = pokemonHelper.typeToIcon('Ice');

    expect(result).toBe('src/assets/icons/ice.svg');
});

test('should return the image for the pokemon', () => {
    const result = pokemonHelper.pokemonToImage({
        "num": "002",
        "name": "Ivysaur"
      }, pokemon);

    expect(result).toBe("http://www.serebii.net/pokemongo/pokemon/002.png");
});