<template>
  <div class="mt-2">
    <b-button-group size="sm">
      <b-button v-on:click="sortByTitle()">Trier par titre</b-button>
      <b-button @click="sortByDate()">Trier par date de sortie</b-button>
      <b-button v-on:click="sortByRate()">Trier par note</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: "Tri",
  props: ["films"],
  data() {
    return {
      sortedByTitle: false,
      sortedByDate: false,
      sortedByRate: false,
    };
  },
  methods: {
    sortByTitle() {
      if (this.sortedByTitle === false) {
        this.sortedByTitle = true;
        this.films.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        this.sortedByTitle = false;
        this.films.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          } else if (a.title < b.title) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    },
    sortByDate() {
      if (this.sortedByDate === false) {
        this.sortedByDate = true;
        this.films.sort(function (a, b) {
          if (a.release_date < b.release_date) {
            return -1;
          } else if (a.release_date > b.release_date) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        this.sortedByDate = false;
        this.films.sort(function (a, b) {
          if (a.release_date > b.release_date) {
            return -1;
          } else if (a.release_date < b.release_date) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    },
    sortByRate() {
      if (this.sortedByRate === false) {
        this.sortedByRate = true;
        this.films.sort(function (a, b) {
          if (a.vote_average < b.vote_average) {
            return -1;
          } else if (a.vote_average > b.vote_average) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        this.sortedByRate = false;
        this.films.sort(function (a, b) {
          if (a.vote_average > b.vote_average) {
            return -1;
          } else if (a.vote_average < b.vote_average) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    },
  },
};
</script>