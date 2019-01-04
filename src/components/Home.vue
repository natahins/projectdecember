<template>
  <div class="homePageComponent">
    <h1>Home</h1>
    <p>
      Welcome
    </p>
    <ul>
      <li> <button v-on:click='changeView("newsPageComponent")'>News</button></li>
      <li><button v-on:click='changeView("contactsPageComponent")'>Contacts</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homePageComponent',
methods: {
  changeView: function(view){
this.$root.$emit('send', view)
  }
}}
</script>
