import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import addIcons from '@/font-awesome-icons/icons';
import '@/sass/main.scss';

addIcons();

//This is how to use font awesome
/* <font-awesome-icon icon="laptop" /> */

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
