import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

axios.get('http://httpbin.org/base64/SFRUUEJJTiBpcyBhd2Vzb21l')
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
});
