import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Filmfrancais from './components/Filmfrancais.vue'
import Filmamericain from './components/Filmamericain.vue'
import Classement from './components/Classement.vue'
import Detailfilm from './components/Detailfilm.vue'
import Sorties2021 from './components/Sorties2021.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path : '/Filmfrancais',
    component : Filmfrancais
  },
  {
    path : '/Filmamericain',
    component : Filmamericain
  },
  {
    path : '/Classement',
    component : Classement
  },
  {
    path : '/Detailfilm/:id',
    component : Detailfilm
  },
  {
    path : '/Sorties2021',
    component : Sorties2021
  }
]

const router = new VueRouter(
  {
    mode:'history',routes
  })


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
