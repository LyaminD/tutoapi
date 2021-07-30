<template>
  <div id="app">
    <Navbar />
    <img alt="Vue logo" class="logo" src="./assets/logo.png" />
    <div class="row d-flex">
      <div class="col d-flex justify-content-center recherche">
        <form class="d-flex mt-2">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Recherche"
            aria-label="Recherche"
            v-model="search"
            @keyup="getMovies(search)"
          />
        </form>
      </div>
    </div>
    <div v-if="search != ''">
      <Movieslist :films="films" />
    </div>
    <div v-else>
      <div v-if="$route.path == '/'">
        <Films />
      </div>
      <div v-else>
        <router-view :key="$route.fullPath"> </router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Films from "./components/Films.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Movieslist from "./components/Movieslist.vue";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import axios from "axios";
export default {
  name: "App",
  components: {
    Films,
    Navbar,
    Footer,
    Movieslist,
  },
  data() {
    return { search: "", films: null };
  },
  methods: {
    getMovies(search) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=95001b5aec050365d3211d744501b39e&language=fr&query=${search}&page=1&include_adult=false`
        )
        .then((res) => {
          this.films = res.data.results;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  font-family: "roboto", sans-serif;
  background-color: #edb233;
}

li {
  display: inline-block;
}

.text {
  width: 10px;
  height: 10px;
}

.logo {
  height: 40vh;
  width: auto;
  margin-top: 100px;
  margin-bottom: 30px;
}

.movies {
  max-width: 20rem;
  height: 50em;
}

.detail {
  max-width: 200rem;
  height: 50em;
}

footer {
  bottom: -200px;
}

@media all and (max-width: 1024px) {
  iframe {
    width: 70vw;
    height: 30vh;
  }

  img {
    width: 80vw;
    height: 40vh;
  }

  .logo {
    height: 15vh;
    width: 30%;
  }

  .collapse {
    background-color: rgb(47, 47, 51);
  }
}
</style>
