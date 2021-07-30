<template>
  <Movieslist  :films="films"/>
</template>

<script>
import axios from "axios";
import Movieslist from "./Movieslist.vue";
export default {
  name: "Sorties2021",
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
        "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate&language=fr"
      )
      .then((res) => {
        this.films = res.data.results;
      });
  },
};
</script>