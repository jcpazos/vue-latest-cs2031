<script>
import { pokemon } from "../datasets/pokemon.json";
export default {
  name: "PokemonView",
  methods: {
    typeToIcon(type) {
      return "../src/assets/icons/" + type.toLowerCase() + ".svg";
    },
  },
  created() {
    this.pokemon = pokemon.find((item) => item.num === this.$route.params.num);
  },
  data() {
    return {
      pokemon: {},
    };
  },
};
</script>

<template>
  <div class="">
    <div>
      <h1 class="display-1">
        {{ `${$route.params.num} ${$route.query.name}` }}
      </h1>
      <div class="pokemon">
        <img height="200" width="200" :src="$route.query.img" />
        <div class="pokemon-inner">
          <h3>Types</h3>
          <div v-for="(typeRow, index) in $route.query.type" :key="index">
            <img width="80" height="80" :src="typeToIcon(typeRow)" />
            <h1 class="display-6">{{ typeRow }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon {
  text-align: center;
  display: flex;
}
</style>
