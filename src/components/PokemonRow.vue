<script>
import { pokemon } from "../datasets/pokemon.json";
import { useUserStore } from "../stores/user";
import pokemonHelper from "./ComponentUtils/PokemonRow.helper";

export default {
  name: "PokemonRow",
  props: ["num", "name", "img", "type", "weaknesses", "next_evolution"],
  methods: {
    typeToIcon(weakness) {
      return pokemonHelper.typeToIcon(weakness);
    },
    pokemonToImage(pokemonEvolution) {
      return pokemonHelper.pokemonToImage(pokemonEvolution, pokemon);
    },
    setFavorite(num) {
      const userStore = useUserStore();
      this.isFavorite = !this.isFavorite;
      this.isFavorite
        ? userStore.addFavorite(num)
        : userStore.removeFavorite(num);
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  created() {
    const userStore = useUserStore();
    this.isFavorite = userStore.favorites.includes(this.num);
  },
};
</script>

<template>
  <tr>
    <td>{{ num }}</td>
    <td>{{ name }}</td>
    <td><img :src="img" /></td>
    <td>
      <img
        v-for="(tipo, index) in type"
        width="40"
        height="40"
        :key="index"
        :src="typeToIcon(tipo)"
      />
    </td>
    <td>
      <img
        v-for="(weakness, index) in weaknesses"
        width="40"
        height="40"
        :key="index"
        :src="typeToIcon(weakness)"
      />
    </td>
    <td>
      <img
        v-for="(evolution, index) in next_evolution"
        :key="index"
        width="70"
        height="70"
        :src="pokemonToImage(evolution)"
      />
    </td>
    <td>
      <svg
        v-if="!isFavorite"
        @click="setFavorite(num)"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>
      <svg
        v-if="isFavorite"
        @click="setFavorite(num)"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
        />
      </svg>
    </td>
  </tr>
</template>

<style scoped></style>
