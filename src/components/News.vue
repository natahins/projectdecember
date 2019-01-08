<template>
  <div class="newsPageComponent">
    <h1>News</h1>
    <ul>
      <li class="newsList" v-for="news in this.$store.getters.getnewsList">
          Дата: {{news.date}}<br>
          <b>{{news.title}}</b><br>
          {{news.info}} <br>
          <button @click='deletingNew'>Delete this</button>
          <hr>
        </li>
    </ul>
    <br>
    <button @click='changeCompo'>Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'newsPageComponent',
  methods: {
    changeCompo() {
      this.$store.dispatch('changeCurrentComponent', "homePageComponent");
    },
    deletingNew(){
      this.$store.dispatch("deletingNews", this.$store.getters.getnewsList.news)
    },
      ...mapActions(['changeCurrentComponent', "deletingNews"])
    }
  }
</script>

<style>
.newsList {

}
</style>
