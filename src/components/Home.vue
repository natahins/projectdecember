<template>
  <div class="homePageComponent">
    <h1>Home</h1>
    <p>
      Welcome
    </p>
    <ul>
      <li><button @click='changeCurrentComponent("newsPageComponent")'>News</button></li> <!-- название экшена, который срабатывает по клику -->
      <li><button @click='changeCurrentComponent("glossaryPageComponent")'>Glossary</button></li>
      <li><button @click='changeCurrentComponent("contactsPageComponent")'>Contacts</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homePageComponent',
  methods: {
    ...mapActions(['changeCurrentComponent']) // подключение экшена
  }
}
</script>
