<template>
  <div class="newsPageComponent">
    <h1>News</h1>
    <ul>
      <li class="newsList" v-for="news in this.$store.getters.getnewsList"
        v-bind:news="news">
          Дата: {{news.date}}<br>
          <b>{{news.title}}</b><br>
          {{news.info}} <br>
          <button v-on:click="deletingNew">Удалить</button>
          <hr>
        </li>
    </ul>
    <br>
    <div class="addnew">
      <input id="newdate" v-model="newDate" placeholder="Дата в формате дд.мм.гг"><br>
      <input id="newtitle" v-model="newTitle" placeholder="Заголовок"><br>
      <input id="newinfo" v-model="newInfo" placeholder="Текст новости"><br>
      <button @click="addingNew">Добавить новость</button>
    </div>
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
      //this.$store.dispatch("deletingNews", this.$store.getters.getnewsList.indexOf(news))
    },
    addingNew:
      function () {
      this.$store.getters.getnewsList.push({
        date: this.newDate,
        title: this.newTitle,
        info: this.newInfo
      })
    },
      ...mapActions(['changeCurrentComponent', "deletingNews"])
    }
  }
</script>

<style>
.newsList {

}
</style>
