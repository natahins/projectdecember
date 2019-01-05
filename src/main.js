import Vue from 'vue'
import App from './App'
import store from './vuex/store'

Vue.config.productionTip = false


window.store = store;

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    components: { App },
    template: '<App />'
});


// new Vue({
//   store,
//   render: h => h(App),
// }).$mount('#app')
