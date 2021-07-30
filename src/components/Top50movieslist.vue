<template>
  <div class="row film">
    <Tri :films="films" />
    <ul>
      <li v-for="(film, index) in films" v-bind:key="film.id">
        <Movie :film="film" :index="index +1" />
      </li>
    </ul>
  </div>
</template>
<script>
import Tri from "./Tri.vue";
import Movie from "./Movie.vue";
export default {
  name: "Movieslist",
  props: ["films"],
  components: {
    Tri,
    Movie,
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>