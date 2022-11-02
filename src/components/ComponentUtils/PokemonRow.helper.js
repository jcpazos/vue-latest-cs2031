//import { useUserStore } from "../../stores/user";

const typeToIcon = (weakness) => {
  return "src/assets/icons/" + weakness.toLowerCase() + ".svg";
};

const pokemonToImage = (pokemonEvolution, pokemon) => {
  return pokemon.find((pokemonRow) => pokemonRow.num === pokemonEvolution.num)
    .img;
};

/*const setFavorite = (num, isFavorite) => {
  const userStore = useUserStore();
  isFavorite = !isFavorite;
  isFavorite ? userStore.addFavorite(num) : userStore.removeFavorite(num);
  return isFavorite;
};*/

export default {
  typeToIcon,
  pokemonToImage,
  //setFavorite,
};
