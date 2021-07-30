<template>
  <Top50movieslist  :films="films" />
</template>

<script>
import axios from "axios";
import Top50movieslist from "./Top50movieslist.vue";
export default {
  name: "Classement",
  components: {
    Top50movieslist,
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      films: null,
    };
  },
  methods: {
    getTop50Movies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=10000"
        )
        .then((res) => {
          component.films = res.data.results;
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=10000"
            )
            .then((res) => {
              res.data.results.forEach((film) => {
                component.films.push(film);
              });
              axios
                .get(
                  "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=10000"
                )
                .then((res) => {
                  res.data.results.forEach((film) => {
                    component.films.push(film);
                  });
                  component.films.splice(50, 10);
                });
            });
        });
    },
  },
  created() {
    this.getTop50Movies(this);
  },
};
</script>