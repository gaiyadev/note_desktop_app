import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



const options = {
  // You can set your default options here
  timeout: 1000,
  draggable: true,
  closeOnClick: false
};
Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
