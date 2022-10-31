<script>
import PokemonRow from "../components/PokemonRow.vue";
import { pokemon } from "../datasets/pokemon.json";

export default {
  name: "PokedexView",
  components: {
    PokemonRow,
  },
  data() {
    return {
      pokemon: pokemon,
    };
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
