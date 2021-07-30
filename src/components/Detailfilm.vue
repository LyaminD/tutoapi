<template>
  <div v-if="!loading">
    <div class="row synopsis">
      <div class="col-md-6 m-auto d-flex justify-content-between">
        <img
          class="detail m-auto"
          v-bind:src="preUrl + film.poster_path"
          alt="moviePoster"
        />
      </div>
      <div class="col-md-5 m-auto align-self-center description bg-white">
        <h1>{{ film.title.toUpperCase() }}</h1>
        <br />
        <h4>{{ film.tagline }}</h4>
        <br />
        <div><strong>Date de sortie :</strong> {{ film.release_date }}</div>
        <br />
        <h4>Synopsis :</h4>
        <br />
        <div>{{ film.overview }}</div>
        <br />
        <p><strong>Casting :</strong></p>
        <div v-for="credit in credits" v-bind:key="credit.original_name">
          <p v-if="credit.character">
            {{ credit.original_name }} dans le rôle de {{ credit.character }}
          </p>
        </div>
        <br />
        <div>
          <strong>Langue originale :</strong>
          {{ film.original_language.toUpperCase() }}
        </div>
        <br />
        <p>
          <strong>Note moyenne : {{ film.vote_average }}</strong>
        </p>
      </div>
    </div>
    <div class="row">
      <h4>Regarder la bande annonce !</h4>
      <div class="mt-5" id="trailer" v-if="film.videos.results[0]">
        <iframe
          width="750"
          height="500"
          v-bind:src="
            'https://www.youtube.com/embed/' + film.videos.results[0].key
          "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="shadow"
        ></iframe>
      </div>
    </div>
  </div>
  <div v-else>Chargement en cours</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detailfilm",

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      film: null,
      id: this.$route.params.id,
      credits: [],
      loading: true,
    };
  },

  created: function () {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=95001b5aec050365d3211d744501b39e&language=fr&append_to_response=videos&with_cast=`
      )
      .then((res) => {
        this.film = res.data;

        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              this.id +
              "/credits?api_key=95001b5aec050365d3211d744501b39e&language=en-US"
          )
          .then((res) => {
            this.loading = false;
            this.credits = res.data.cast.splice(0, 10);
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