<template>
<div class="contactsPageComponent">
    <h1>Contacts</h1>
  <ul>
    <li>siteemail@gmail.com</li>
    <li>+7(495)440-22-11</li>
  </ul>
  <br>
  <button @click='changeCompo'>Go Home</button>
</div>
</template>

<script>
export default {
  name: 'contactsPageComponent',
  methods: {
    changeCompo() {
      this.$store.dispatch('changeCurrentComponent', "homePageComponent");
    },
      ...mapActions(['changeCurrentComponent'])
    }
  }
</script>
