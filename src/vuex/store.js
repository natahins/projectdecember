import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // данные в хранилище
      currentView: 'homePageComponent', // текущий компонент
      newsList: [
        {
          date: "29.12.2018",
          title: "Последний рабочий день",
          info: "Наконец-то закончился рабочий год, и все ушли на каникулы"
        },
        {
          date: "01.01.2019",
          title: "Новый год",
          info: "Поздравляем с наступлением Нового 2019 года"
        },
        {
          date: "02.01.2019",
          title: "Второй день нового года",
          info: "Страна продолжает отмечать НГ"
        },
        {
          date: "03.01.2019",
          title: "Третьй день нового года",
          info: "Страна продолжает отмечать НГ"
        },
        {
          date: "07.01.2019",
          title: "Рождество",
          info: "Наступило Рождество, скоро на работу"
        }
      ],
      glossaryList: [
        "абрикос", "ананас", "апельсин", "бамбук", "банан", "баобаб",
        "ваниль", "василек", "верба","гвоздика", "гербера", "горох"
      ],
      glossaryObj: {}

    },
    getters: {
      getCurrentComponent: state => state.currentView, // берем из хранилища текущий компонент
      getnewsList: state => state.newsList,
      getGlossaryList: state => state.glossaryList,
      getGlossaryObj: state => state.glossaryObj

    },
    mutations: {
      changeCurrentComponent(state, component) { // меняет компонент
        state.currentView = component;
      },
      addNewNews(state, addingNew) {
        state.newsList.push(addingNew);
      },
      deletingNews(state, delNew){
        state.newsList.splice(delNew, 1);
      },
      addToGlossary (state, newWord){
        state.glossaryList.push(newWord);
      }
    },

    actions: {
      changeCurrentComponent ({ commit }, component) { // вызов мутации, которая поменяет наш компонент
          commit('changeCurrentComponent', component)
      },
      deletingNews ({ commit }, delNew){
          commit("deletingNews", delNew)
      },
      addNewNews({ commit }, addNew){
          commit("addNewNews", addNew)
      },
      addToGlossary({ commit }, newWord){
          commit("addToGlossary", newWord)
    }
  }
})
