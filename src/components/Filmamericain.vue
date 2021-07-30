<template>
  <Movieslist  :films="films"/>
</template>

<script>
import axios from "axios";
import Movieslist from "./Movieslist.vue";
export default {
  name: "Filmamericain",
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
        "https://api.themoviedb.org/3/discover/movie?api_key=95001b5aec050365d3211d744501b39e&include_adult=false&include_video=false&page=1&language=fr&certification_country=us&vote_count.gte=10000"
      )
      .then((res) => {
        this.films = res.data.results;
      });
  },
};
</script>