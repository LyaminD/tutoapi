<template>
  <Movieslist :films="films"/>
</template>

<script>
import axios from "axios";
import Movieslist from "./Movieslist.vue";
export default {
  name: "Films",
  components: {
    Movieslist,
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      films: null,
    };
  },
  methods: {
    getAllMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=fr&"
        )
        .then((res) => {
          component.films = res.data.results;
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&language=fr&"
            )
            .then((res) => {
              res.data.results.forEach((film) => {
                component.films.push(film);
              });
              axios
                .get(
                  "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&language=fr&"
                )
                .then((res) => {
                  res.data.results.forEach((film) => {
                    component.films.push(film);
                  });
                });
            }) ;
        });
    },
  },
  created() {
    this.getAllMovies(this);
  },
};
</script>