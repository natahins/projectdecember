<template>
  <div class="newsPageComponent">
    <h1>News</h1>
    No news :( Nothing happened.
    <br>
    <button v-on:click='changeView("homePageComponent")'>Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'newsPageComponent',
methods: {
  changeView: function(view){
this.$root.$emit('send', view)
  }
}}
</script>
