<template>
  <div class="newsPageComponent">
    <h1>News</h1>
    No news :( Nothing happened.
    <br>
    <button @click='changeCurrentComponent("homePageComponent")'>Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'newsPageComponent',
  methods: {
    ...mapActions(['changeCurrentComponent'])
  }
}
</script>
