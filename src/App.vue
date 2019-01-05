<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<component v-bind:is="currentView"></component>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";


import homePageComponent from './components/Home.vue'
import newsPageComponent from './components/News.vue'
import contactsPageComponent from './components/Contacts.vue'


export default {
  name: 'app',
  components: {
     homePageComponent, newsPageComponent, contactsPageComponent
  },
  data: ()=>({
    currentView: "homePageComponent"
  }),
  created() {
    this.$root.$on('send', (view) => {
    	this.currentView = view;
    })}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
