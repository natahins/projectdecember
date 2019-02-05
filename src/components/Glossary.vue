<template>
<div class="glossaryPageComponent">
    <h1>Glossary</h1>
    <div class="searching_container">
      <p>Поиск по глоссарию:</p>
      <input>
      <br>
      <p>Добавить в глоссарий:</p>
      <input class="glossary-add" v-model="newWord">
      <button @click='addingWord'>Add</button>
    </div>
    <div class= "glossary_container">
      <ul>
        <!--  <li v-for="listLetter in getCollection">
            <p class="head_letter">{{listLetter.letter}}</p>
            <p v-for="elem in listLetter.wordList">{{elem}}</p>
          </li> -->
      </ul>
  </div>
  <br>
  <button @click='changeCompo'>Go Home</button>
</div>
</template>

<script>
export default {
  name: 'glossaryPageComponent',
  data() {
    return {
      newWord: '',
     glossaryObj: {}
    }
  },
  methods: {
      init() {
        // console.log("glossaryList в ините: " + this.glossaryList);
        // console.log("_____________");
        // console.log("glossaryObj в ините: ");
        // console.log(this.$store.getters.getGlossaryObj);

        this.getGlossaryObj = this.glossaryList.reduce((acc, cur) => {
            const [letter] = cur;
            if (!acc.hasOwnProperty(letter)) {
              acc[letter] = []
            } 
            acc[letter].push(cur);
            return acc;
        }, {});

        console.warn(this.glossaryObj);
      },
        changeCompo() {
          this.$store.dispatch('changeCurrentComponent', "homePageComponent");
        },
        addingWord() {
            this.$store.dispatch('addToGlossary', this.newWord);
            this.init();
            // console.log("glossaryObj после добавления --------------");
            //  console.log("glossaryList после добавления слова: " +  this.glossaryList);
            //  console.log("+++++++++++++");
            //  console.log(this.$store.getters.getGlossaryObj);
        },
        ...mapActions(['changeCurrentComponent', 'addToGlossary'])
    },
    computed:{
      ...mapState(['glossaryList'])
    },
    created(){
        this.init();
       
    }

  }
</script>

<style>
.head_letter {
  font-size: 30px;
  font-family: Georgia, sans-serif;
  text-decoration: underline;
  background-color: #DCDCDC;
}
</style>
