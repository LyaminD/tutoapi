<template>
  <b-card class="movies m-3 mt-3">
   <h3 v-if="index" class="pb-3 text-danger">
      <span v-once># {{ index }}</span>
    </h3>
    <div><strong>{{ film.title }}</strong></div>
    <img
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
      v-bind:src="preUrl + film.poster_path"
      alt="moviePoster"
    />
    <div class="row">
      <div class="col">
        <div class="m-3 mt-3"><strong>Date de sortie : </strong>{{ film.release_date }}</div>
        <div class="m-3 mt-3"><strong>Note moyenne : </strong>{{ film.vote_average }}</div>
        <div class="m-3 mt-3">
          {{ film.overview.substring(0, 150) + "..." }}
        </div>
      </div>
    </div>
    <router-link :to="`Detailfilm/${film.id}`">
      <b-button variant="primary">Plus de détails</b-button></router-link
    >
  </b-card>
</template>

<script>
export default {
  name: "Movie",
  props: ["film", "index"],
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>