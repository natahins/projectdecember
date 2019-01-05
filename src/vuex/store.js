import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // данные в хранилище
      currentView: 'homePageComponent', // текущий компонент
    },
    getters: {
      getCurrentComponent: state => state.currentView // берем из хранилища текущий компонент
    },
    mutations: {
      changeCurrentComponent(state, component) { // меняет компонент
        state.currentView = component;
      }
    },
    actions: {
      changeCurrentComponent ({ commit }, component) { // вызов мутации, которая поменяет наш компонент
          commit('changeCurrentComponent', component)
      }
    }
})
