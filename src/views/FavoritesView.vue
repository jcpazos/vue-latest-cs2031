<script>
import PokemonRow from "../components/PokemonRow.vue";
import { pokemon } from "../datasets/pokemon.json";
import { useUserStore } from "../stores/user";

export default {
  name: "FavoritesView",
  components: {
    PokemonRow,
  },
  data() {
    return {
      pokemon: [],
    };
  },
  created() {
    const userStore = useUserStore();
    this.pokemon = pokemon.filter((item) =>
      userStore.favorites.includes(item.num)
    );
  },
};
</script>

<template>
  <div class="pokedex"> 
    <table class="table table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Tipos</th>
          <th>Debilidades</th>
          <th>Evoluciones</th>
          <th>Favorito</th>
        </tr>
      </thead>
      <tbody>
        <PokemonRow
          v-for="(pokemonRow, index) in pokemon"
          :key="index"
          :type="pokemonRow.type"
          :num="pokemonRow.num"
          :name="pokemonRow.name"
          :img="pokemonRow.img"
          :weaknesses="pokemonRow.weaknesses"
          :next_evolution="pokemonRow.next_evolution"
        ></PokemonRow>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .pokedex {
    margin-top: 30%;
    margin-bottom: 30%;
    overflow: auto;
    max-height: 70vh;
    align-items: center;
  }
}
</style>
