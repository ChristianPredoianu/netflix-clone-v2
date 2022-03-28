import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store';
import { getAuth } from 'firebase/auth';
import '@/plugins/firebase';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import addIcons from '@/font-awesome-icons/icons';
import '@/sass/main.scss';

addIcons();

let app;
getAuth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount('#app');
  }
});
