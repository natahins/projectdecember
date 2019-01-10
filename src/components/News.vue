<template>
  <div class="newsPageComponent">
    <h1>News</h1>
    <ul>
      <li
        class="newsList"
        v-for="(news, key) in getCollection"
        :key=key
      >
          Дата: {{news.date}}<br>
          <b>{{news.title}}</b><br>
          {{news.info}} <br>
          <button @click="deletingNew(key)">Удалить</button>
          <hr>
        </li>
    </ul>
    <br>
    <div class="addnew">
      <input id="newdate" v-model="newDate" placeholder="Дата в формате дд.мм.гг"><br>
      <input id="newtitle" v-model="newTitle" placeholder="Заголовок"><br>
      <input id="newinfo" v-model="newInfo" placeholder="Текст новости"><br>
      <button @click="addingNew1">Добавить новость</button>
    </div>
    <button @click='changeCompo'>Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'newsPageComponent',
  data() {
    return {
      newDate: '',
      newTitle: '',
      newInfo: ''
    }
  },
  computed: {
    getCollection() {
      return this.$store.getters.getnewsList;
    }
  },
  methods: {
    changeCompo() {
      this.$store.dispatch('changeCurrentComponent', "homePageComponent");
    },
    deletingNew(key) {
      this.$store.dispatch("deletingNews", key)
    },
    addingNew1() {
      this.$store.dispatch('addNewNews', {
        date: this.newDate,
        title: this.newTitle,
        info: this.newInfo
      })
    },

      /*function () {
      this.$store.getters.getnewsList.push({
        date: this.newDate,
        title: this.newTitle,
        info: this.newInfo
      })
    },*/
      ...mapActions(['changeCurrentComponent', "deletingNews", "addNewNews"])
    }
  }
</script>

<style>
.newsList {

}
</style>
