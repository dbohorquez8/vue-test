<template>
  <div class="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" alt="">
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  data() {
    return {
      pokemon: {
        sprites: {},
      },
      pokemonId: 1,
    };
  },
  watch: {
    pokemonId() {
      this.$http.get(`http://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`).then((data) => {
        this.pokemon = data.body;
      });
    },
  },
  created() {
    this.$http.get(`http://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`).then((data) => {
      this.pokemon = data.body;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
