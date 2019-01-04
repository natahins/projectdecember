<template>
<div class="contactsPageComponent">
    <h1>Contacts</h1>
  <ul>
    <li>siteemail@gmail.com</li>
    <li>+7(495)440-22-11</li>
  </ul>
  <br>
  <button v-on:click='changeView("homePageComponent")'>Go Home</button>
</div>
</template>

<script>
export default {
  name: 'contactsPageComponent',
methods: {
  changeView: function(view){
this.$root.$emit('send', view)
  }
}}
</script>
