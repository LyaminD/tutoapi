<template>
  <Movieslist :films="films" />
</template>

<script>
import axios from "axios";
import Movieslist from "./Movieslist.vue";
export default {
  name: "Filmfrancais",
  components: {
    Movieslist,
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      films: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=fr&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=1000"
      )
      .then((res) => {
        this.films = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_original_language=fr&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=1000"
          )
          .then((res) => {
            res.data.results.forEach((film) => {
              this.films.push(film);
              axios
                .get(
                  "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_original_language=fr&with_watch_monetization_types=flatrate&language=fr&vote_count.gte=1000"
                )
                .then((res) => {
                  res.data.results
                    .forEach((film) => {
                      this.films.push(film);
                    })
                    .catch((err) => {
                      alert("FAIL", err);
                    });
                });
            });
          })
          .catch((err) => {
            alert("FAIL", err);
          });
      })
      .catch((err) => {
        alert("FAIL", err);
      });
  },
};
</script>