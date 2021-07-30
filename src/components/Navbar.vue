<template>
  <header>
    <b-navbar class="p-3 fixed-top" toggleable="xl" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/" class="link">TutoAPI </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" class="link text-center"
              >Accueil</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link to="/Filmfrancais" class="link text-center"
              >Films français</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/Filmamericain" class="link "
              >Films américains</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/Classement" class="link "
              >Top 50 : les mieux notés</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/Sorties2021" class="link "
              >Films sortis en 2021</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
</script>