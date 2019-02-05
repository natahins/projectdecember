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
          <button :data-editkey="key" @click="edit(key)">Редактировать</button>
          <div :data-formkey="key" class="editForm">
              <input class="input-form" v-model="news.date"><br>
              <input class="input-form" v-model="news.title"><br>
              <input class="input-form" v-model="news.info"><br>
           </div>
          <hr>
        </li>
    </ul>
    <br>
    <div class="addnew">
      <input class="input-form" v-model="newDate" placeholder="Дата в формате дд.мм.гг"><br>
      <input class="input-form" v-model="newTitle" placeholder="Заголовок"><br>
      <input class="input-form" v-model="newInfo" placeholder="Текст новости"><br>
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
      newInfo: '',
      editSeen: false
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
    edit(key) {
      let elem = document.querySelector(`.editForm[data-formkey="${key}"]`);
      elem.classList.add('editFormActive');
      console.warn(key);
      console.warn(elem);

      // this.editSeen = !(this.editSeen);
    },
      ...mapActions(['changeCurrentComponent', "deletingNews", "addNewNews"])
    }
  }
</script>

<style>
.input-form {
  width: 400px;
}

.editForm {
  display: none;
}
.editFormActive {
  display: block;
}
</style>
