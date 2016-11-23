<template>
  <div class="pokemon">
    <h1>{{ name }}</h1>
    <!-- <img src={{ spriteUrl }} alt=""> -->
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  data() {
    return {
      name: 'Loading...',
      spriteUrl: '',
    };
  },
  created() {
    this.$http.get('http://pokeapi.co/api/v2/pokemon/1/', (data) => {
      this.name = data;
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
